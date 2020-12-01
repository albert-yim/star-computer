import React from 'react';

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : 'epqns4@gmail.com',
            password: 'password'
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '',password: ''})
    }

    handleChnage = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }
    
    render(){
        return (
            <div className = 'sign-in' onSubmit = {this.handleSubmit}> 
                <h2> I already have an account </h2>
                <span>Sign in with your email and password</span>

                <form>
                    <input name = 'email' type = 'email' value = {this.state.email} onChange = {this.handleChnage} required/>
                    <label> email</label>
                    <input name = 'password' type = 'password' value = {this.state.password} onChange = {this.handleChnage} required/>
                    <label> password</label>

                    <input type = 'submit' value = 'submit form'/>
                </form>

            </div>
        );
    }
}

export default SignIn;