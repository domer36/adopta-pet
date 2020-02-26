import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/authService'

export const MyContext = createContext()

class Context extends Component {
    state = {
        userLogged: null,
        loading: false,
        sign_form: { username: '', email: '', password: '', confirm_password: ''}
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

    render() {
        const { state, handleSingChange, submitSignup,resetSignForm, submitLogin } = this

        return (
            <MyContext.Provider value={{
                state,
                handleSingChange,
                submitSignup,
                resetSignForm,
                submitLogin
         }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default withRouter(Context)