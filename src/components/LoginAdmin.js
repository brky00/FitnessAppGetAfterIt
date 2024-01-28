import React from 'react'
import './LoginAdmin.css'

const Login = () => {
    return(
        <div className="container-login">
            <form>
                <h1>LOGIN AS ADMIN</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Sign in</button>
                <a href="/" className='back-link'>&larr;Back to home page</a>
            </form>
        </div>
    )
}

export default Login