import React from 'react';

import './sign-in-and-sign-up-component.scss';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';


const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
       <SignIn />
       <SignUp />
    </div>
)

export default SignInAndSignUpPage;