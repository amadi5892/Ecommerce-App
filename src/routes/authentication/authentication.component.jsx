import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

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
        </div>
    )
}

export default Authentication