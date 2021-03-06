import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import FormInput from '../form-input/form-input.components'

import './sign-in.styles.scss'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : 'epqns4@gmail.com',
            password: 'password'
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error);
        }
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
                    <div className='buttons'>
                        <CustomButton type = 'submit'> Sign In </CustomButton>
                        <CustomButton type = 'button' onClick = {signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;