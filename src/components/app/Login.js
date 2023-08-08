
// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from '@react-oauth/google';

// Import this from the lib
import { useGoogleLogin } from '@react-oauth/google';

function Login() {

    // Use this function to trigger the
    // "LogIn With Google" process
    // at the end of which the onSuccess function
    // is triggered
    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse)
    });

    return (
        <div className="Login">
            <header className="Login-header">

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
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