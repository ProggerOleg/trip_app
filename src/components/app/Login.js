
// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from '@react-oauth/google';

// Import this from the lib
import { useGoogleLogin } from '@react-oauth/google';

function Login({ updateParentState }) {

    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            console.log(codeResponse);
            updateParentState(false);
        }
    });

    return (
        <div className="Login">
            <header className="Login-header">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        updateParentState(false);
                    }}
                    shape="rectangular"
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </header>
        </div>
    );
}
export default Login;