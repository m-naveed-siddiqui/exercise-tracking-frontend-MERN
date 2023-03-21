import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { MDBInput, MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function Register(props) {
    const set_fname = useRef();
    const set_lName = useRef();
    const set_email = useRef();
    const set_password = useRef();
    const set_dob = useRef();

    const [errorMessage, setErrorMessage] = useState([]);
    // const [gender, setGender] = useState('');
    // const onGenderChange = e => {
    //     setGender(e.target.value);
    // };

    const handleRegister = (e) => {
        e.preventDefault();

        const firstname = set_fname.current.value;
        const lastname = set_lName.current.value;
        const email = set_email.current.value;
        const password = set_password.current.value;
        const dob = set_dob.current.value;

        axios.post(import.meta.env.VITE_API_HOST+'register', {
            firstname, lastname, email, password, dob
        }).then(res => {
            localStorage.setItem('user', res.data.token);
            props.setIsLogin(true)
        }).catch(error => {
            if (error.response) {
                //setErrorMessage( Object.keys(error.response.data).length ? Object.values(error.response.data) : ["Email already exists"] );
                setErrorMessage(Object.values(error.response.data));
            } else {
                setErrorMessage([error.message])
            }

        });

    };

    return (
        <>
            <form onSubmit={handleRegister}>
                <p className='text-center fw-bold'>Start your fitness journey now</p>

                <div className="row">
                    <div className="col-6">
                        <div className="form-outline mb-4">
                            <MDBInput label='First Name' type='text' className="form-control" ref={set_fname} required />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-outline mb-4">
                            <MDBInput label='Last Name' type='text' className="form-control" ref={set_lName} required />
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <MDBInput label='Email' type='email' className="form-control" ref={set_email} placeholder="your@email.com" required />
                </div>
                <div className="form-outline mb-4">
                    <MDBInput label='Password' type='password' className="form-control" ref={set_password} placeholder="Please create your password" required />
                </div>
                <div className="form-outline mb-4">
                    <MDBInput label='Date of Birth (optional)' type='date' className="form-control" ref={set_dob} />
                </div>

                {errorMessage.map((item, key) => {
                    return <div className="form-outline"><small className='text-danger' key={key}>{item}</small></div>
                })}

                <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                        Sign up now
                    </button>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Already have an account?</p>
                    <Link to="/" className="btn btn-outline-danger">Log in</Link>
                </div>
            </form>
        </>
    )
}
