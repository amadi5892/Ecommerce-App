import { useState} from 'react';
import { userSignInWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignUpContainer, ButtonsContainer, H2 } from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email: '',
    password: ''
}

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

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
            const {user} = await userSignInWithEmailAndPassword(email, password);

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
        await signInWithGooglePopup();
        
    }

    return (
        <SignUpContainer >
            <H2>I already have an account</H2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput label='Email' type='email' required name='email' value={email} onChange={handleChange} />
                <FormInput label='Password' type='password' required name='password' value={password} onChange={handleChange} />
                <ButtonsContainer >
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser} >Google Sign In</Button>
                </ButtonsContainer>
                
            </form>
        </SignUpContainer>
    )
}

export default SingInForm;