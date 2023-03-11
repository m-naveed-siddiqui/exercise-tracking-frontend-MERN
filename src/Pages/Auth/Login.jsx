import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Layout from '../../Components/Auth/LayoutAuth';
import { useCookies } from "react-cookie";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email,password
        }
        // fetch('http://10.241.72.232:3000/login', {
        fetch('http://127.0.0.1:3000/login', {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            const token = data.token;
            if(token) {
                setCookie('token',token);
                window.location.replace("/dashboard");
            } else {
                setErrorMessage("Credentials Mismatched");
            }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    return (
        
        <>
            <form onSubmit={handleLogin}>
                <p>Please login to your account</p>

                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control"
                        placeholder="Please enter your email address" required onChange={(e)=>setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control"
                        placeholder="Please enter your password" required onChange={(e)=>setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <small className='text-danger'>{errorMessage}</small>
                </div>
                <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                        Log in
                    </button>
                    <Link className="text-muted" to={'/register'}>Forgot password?</Link>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                   <Link className="btn btn-outline-danger" to={'/register'}> Create new</Link>
                </div>
            </form>
        </>
    )
}
