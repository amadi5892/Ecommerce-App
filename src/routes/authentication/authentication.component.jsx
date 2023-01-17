import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SingInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.css';

const Authentication = () => {

    return (
        <div className='authentication-container'>
            <SingInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication