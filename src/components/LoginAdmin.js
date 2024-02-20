import React, {useState} from 'react'
import './LoginAdmin.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './firebase-config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // funksjon for  å logge inn brukeren med epost og passord
    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const adminUser = userCredential.user;
                console.log('User logged in succesfully: ', adminUser.email);
                Swal.fire({
                    timer: 1500,
                    showConfirmButton: false,
                    willOpen: () => {
                      Swal.showLoading();
                    },
                    willClose: () => {
                      Swal.fire({
                        icon: 'success',
                        title: 'Successfully logged in!',
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    },
                  });
                // (implement kode for å sende bruker til admin panel)
                navigate("/dashboard");      
            })
            .catch((error) => {
                Swal.fire({
                    timer: 1500,
                    showConfirmButton: false,
                    willOpen: () => {
                      Swal.showLoading();
                    },
                    willClose: () => {
                      Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Incorrect email or password.',
                        showConfirmButton: true,
                      });
                    },
                  });
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error logging in: ', errorCode, errorMessage);
                // implement kode for login error melding
            });
    };
    return(
        <div className="container-login">
            <form onSubmit={handleLogin}>
                <h1>LOGIN AS ADMIN</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                
                <button type="submit" className="login btn-primary mt-2">Login</button>

                <a href="/" className='back-link'>&larr;Back to home page</a>
            </form>
        </div>
    )
}

export default Login