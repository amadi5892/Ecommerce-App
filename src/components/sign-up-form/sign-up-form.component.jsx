import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('email and password does not match!');
            return;
        };

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user/email already in use')
            }else {
                console.log('user creation encountered an error')
            }
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit} >
                <label>Display Name</label>
                <input type='text' required name='displayName' value={displayName} onChange={handleChange} />

                <label>Email</label>
                <input type='email' required name='email' value={email} onChange={handleChange} />

                <label>Password</label>
                <input type='password' required name='password' value={password} onChange={handleChange} />

                <label>Confirm Password</label>
                <input type='password' required name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                <button type='submit' >Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm