import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './authentication.styles.css';

const Authentication = () => {
    
    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className='authentication-container'>
            <h2>Sign In Page</h2>
            <button onClick={logGoogleUser} >
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default Authentication