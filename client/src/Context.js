import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/authService'
import PET_SERVICE from './services/petService'

export const MyContext = createContext()

class Context extends Component {
    state = {
        userLogged: null,
        loading: false,
        sign_form: { username: '', email: '', password: '', confirm_password: ''},
        pets: []
    }

    isLogged = async ()=>{
        const {data} = await AUTH_SERVICE.loggedIn()
        this.setState({userLogged: data.user})
        return data.user || false
    }

    updateProfile = async ()=> {
        const {data} = await AUTH_SERVICE.getProfile()
        this.setState({userLogged: data.user || {}})
        return data.user || false
    }

    handleUpdateUserProfile = ({target: {name, value}}) => {
        this.setState(prev => ({
            ...prev,
            userLogged: {
                ...prev.userLogged,
                [name]: value
            }
        }))
    }

    resetSignForm = () => {
        this.setState({sign_form: {username:'', email: '', password: '', confirm_password: ''}})
    }

    handleSingChange = ({target: {name, value}}) => {
        this.setState( prev => {return {
            ...prev,
            sign_form: {
                ...prev.sign_form,
                [name]: value
            }
        }})
    }

    submitSignup = async ()=>{
        this.setState({loading: true})
        
        const {data} = await AUTH_SERVICE.signup( this.state.sign_form ).catch( err => ({data: null}))
        
        this.setState({loading: false})
        return (data) ? data.user : null
    }

    submitLogin = async ()=>{
        this.setState({loading: true})
        const {email, password} = this.state.sign_form
        
        const {data} = await AUTH_SERVICE.login( {email, password} ).catch( err => ({data: null}))
        
        this.setState({loading: false})
        this.setState({userLogged: (data) ? data.user : null})
        
        return this.state.userLogged
    }

    getPets = async ()=>{
        const {data} = await PET_SERVICE.search().catch( err=> ({data:null}))
        console.log(data);
        
        this.setState({pets: (data) ? data.pets : []})
    }

    getPetProfile = async (id)=>{
        const {data} = await PET_SERVICE.profile(id).catch( err => ({data: null}))
        return (data) ? data.pet : null
    }

    render() {
        const { 
            state, 
            handleSingChange, 
            submitSignup,
            resetSignForm, 
            submitLogin ,
            getPets,
            getPetProfile,
            handleUpdateUserProfile,
            updateProfile
        } = this
        return (
            <MyContext.Provider value={{
                state,
                handleSingChange,
                submitSignup,
                resetSignForm,
                submitLogin,
                getPets,
                getPetProfile,
                handleUpdateUserProfile,
                updateProfile
         }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default withRouter(Context)