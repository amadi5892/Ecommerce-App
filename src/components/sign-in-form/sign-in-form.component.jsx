import { useState } from 'react';
import { userSignInWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.css';

const defaultFormFields = {
    email: '',
    password: ''
}

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    console.log(formFields)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userSignInWithEmailAndPassword(email, password);

            resetFormFields();

        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className='sign-up-container' >
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput label='Email' type='email' required name='email' value={email} onChange={handleChange} />
                <FormInput label='Password' type='password' required name='password' value={password} onChange={handleChange} />
                <div className='buttons-container' >
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={logGoogleUser} >Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SingInForm;