import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import FormInput from '../form-input/form-input.components'

import './sign-in.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils';

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
                    <FormInput 
                        name = 'email' 
                        type = 'email' 
                        value = {this.state.email} 
                        handleChange = {this.handleChnage} 
                        label = 'email' 
                        required
                    />
                    <FormInput 
                        name = 'password' 
                        type = 'password' 
                        value = {this.state.password} 
                        handleChange = {this.handleChnage} 
                        label = 'password' 
                        required
                    />
                    <CustomButton type = 'submit'> Sign In </CustomButton>
                    <CustomButton onClick = {signInWithGoogle}> Sign In with Google </CustomButton>
                </form>

            </div>
        );
    }
}

export default SignIn;