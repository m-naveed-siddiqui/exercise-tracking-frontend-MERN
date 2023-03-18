import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useCookies } from "react-cookie";
import axios from 'axios';
import { MDBInput } from 'mdb-react-ui-kit';

export default function Login() {
    const set_email = useRef();
    const set_password = useRef();

    const [errorMessage, setErrorMessage] = useState('');
    // const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = set_email.current.value;
        const password = set_password.current.value;

        // const data = { email, password  }
        // fetch('http://127.0.0.1:3000/login', {
        //     method:"POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     const token = data.token;
        //     if(token) {
        //         // setCookie('token',token);
        //         window.location.replace("/dashboard");
        //     } else {
        //         setErrorMessage("Credentials Mismatched");
        //     }
        // })
        // .catch((error) => {
        //   setErrorMessage(error.message);
        // });

        axios.post('http://127.0.0.1:3000/login', {
            email, password
        }).then(res => {
            localStorage.setItem('user', res.data.token);
            location.reload();
        }).catch(error => setErrorMessage(error.message));
    }

    return (

        <>
            <form onSubmit={handleLogin}>
                <p className='fw-bold'>Please login to your account</p>

                <div className="form-outline mb-4">
                    <MDBInput label='Email' type='email' className="form-control" ref={set_email} placeholder="your@email.com" required />
                </div>
                <div className="form-outline mb-4">
                    <MDBInput label='Password' type='password' className="form-control" ref={set_password} placeholder="Please enter your password" />
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
