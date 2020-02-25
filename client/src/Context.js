import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/authService'

export const MyContext = createContext()

class Context extends Component {
    state = {
        userLogged: null,
        loading: false,
        signup_form: { username: '', email: '', password: '', confirm_password: ''}
    }

    resetSignupForm = () => {
        this.setState({signup_form: {username:'', email: '', password: '', confirm_password: ''}})
    }

    handleSingupChange = ({target: {name, value}}) => {
        this.setState( prev => {return {
            ...prev,
            signup_form: {
                ...prev.signup_form,
                [name]: value
            }
        }})
    }

    submitSignup = async ()=>{
        this.setState({loading: true})
        
        const {data} = await AUTH_SERVICE.signup( this.state.signup_form ).catch( err => ({data: null}))
        
        this.setState({loading: false})
        return (data) ? data.user : null
    }

    render() {
        const { state, handleSingupChange, submitSignup,resetSignupForm } = this

        return (
            <MyContext.Provider value={{
                state,
                handleSingupChange,
                submitSignup,
                resetSignupForm
         }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default withRouter(Context)