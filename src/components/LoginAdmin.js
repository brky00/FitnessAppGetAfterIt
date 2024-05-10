import React, {useState} from 'react'
import './LoginAdmin.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './firebase-config';
import { useNavigate } from 'react-router-dom';
import logoImage from "./images/lionGetAfterIt.png";
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // function for login with mail and password.
    const handleLogin = (e) => {
        e.preventDefault();
        Swal.fire({
          title: "Logging in...",
          text: "Please wait while we log you in.",
          imageUrl: logoImage, // our logo is used here and fixed size under there.(with swal2)
          imageWidth: 80, 
          imageHeight: 80, 
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
        });

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
              Swal.fire({
                icon: 'success',
                title: 'Successfully logged in!',
                showConfirmButton: false,
                timer: 1500,
            });

                const adminUser = userCredential.user;
                //The code add user(admin) in local storage with the key 'user'.
                localStorage.setItem('user', JSON.stringify(adminUser));
                localStorage.setItem('isLoggedIn', 'true');

                console.log('User logged in succesfully: ', adminUser.email);

                navigate("/dashboard");      
            })
            .catch((error) => {

                Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'Incorrect email or password.',
                  showConfirmButton: true,
              });
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error logging in: ', errorCode, errorMessage);
                // error feedback,
            });
    };
    return(
        <div className="container-login">
            <form className='loginForm' onSubmit={handleLogin}>
                <h1>LOGIN AS ADMIN</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                
                <button type="submit" className="login btn-primary loginButton mt-2">Login</button>

                <a href="/" className='back-link'>&larr;Back to home page</a>
            </form>
        </div>
    )
}

export default Login