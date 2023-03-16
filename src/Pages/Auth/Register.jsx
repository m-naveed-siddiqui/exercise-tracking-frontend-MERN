import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
// import { useQuery } from 'react-query';
import { MDBInput, MDBRadio, MDBBtnGroup} from 'mdb-react-ui-kit';

import axios from 'axios';

export default function Register() {
    const set_fname = useRef();
    const set_lName = useRef();
    const set_email = useRef();
    const set_password = useRef();
    const set_dob = useRef();

    const [errorMessage, setErrorMessage] = useState([]);
    const [gender, setGender] = useState('');
    const onGenderChange = e => {
        setGender(e.target.value);
    };

    // const { isLoading, error, data, isFetching, refetch } = useQuery("registerUser", () => {
    // });

    const handleRegister = (e) => {
        e.preventDefault();

        const firstname = set_fname.current.value;
        const lastname = set_lName.current.value;
        const email = set_email.current.value;
        const password = set_password.current.value;
        const dob = set_dob.current.value;
        
        // const data = {firstname, lastname, email, password, dob, gender};
        // fetch('http://127.0.0.1:3000/register', {
        //     headers: {"Content-Type": "application/json"},
        //     method:"POST",
        //     body: JSON.stringify(data),
        // })
        // .then(response => {
        //     // console.log(response.status, response.ok);
        //     return response.json();
        // })
        // .then(result => console.log(result.message))
        // .catch(error => console.error('Oops! '+error.message));

        axios.post('http://127.0.0.1:3000/register', {
            firstname, lastname, email, password, dob, gender
        }).then(res => {
            localStorage.setItem('user', res.data.token);
            location.reload();
            // useNavigate('/ ')
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
                        <MDBInput label='First Name' id='form1' type='text' className="form-control" ref={set_fname} />
{/* 
                            <input type="text" id="fname" className="form-control"
                                placeholder="Your first name" ref={set_fname} />
                            <label className="form-label" htmlFor="fname">First Name</label> */}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-outline mb-4">
                        <MDBInput label='Last Name' id='form1' type='text' className="form-control" ref={set_lName} />
                            {/* <input type="text" id="lname" className="form-control"
                                placeholder="Your last name" required ref={set_lName} />
                            <label className="form-label" htmlFor="lname">Last Name</label> */}
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                      <MDBInput label='Email' id='form1' type='email' className="form-control" ref={set_email} placeholder="your@email.com"  />
                    {/* <input type="email" id="email" className="form-control"
                        placeholder="your@email.com" required ref={set_email} />
                    <label className="form-label" htmlFor="email">Email</label> */}
                </div>
                <div className="form-outline mb-4">
                <MDBInput label='Password' id='form1' type='password' className="form-control" ref={set_password} placeholder="Please create your password" />
                    {/* <input type="password" id="password" className="form-control"
                        placeholder="Please create yor password" required ref={set_password} />
                    <label className="form-label" htmlFor="password">Password</label> */}
                </div>
                <div className="form-outline mb-4">
                <MDBInput label='Date' id='form1' type='date' className="form-control" ref={set_dob} />
                    {/* <input type="date" id="dob" className="form-control" ref={set_dob} />
                    <label className="form-label" htmlFor="dob">Date of Birth</label> */}
                </div>

                <div className="form-outline mb-4" >
                <label className="form-label" htmlFor="">Gender</label>
                <div className=" form-control">
                <MDBBtnGroup className=" form-control align-items-center justify-content-center">
                        <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='MALE' />
                        <MDBRadio btn btnColor='secondary' id='btn-radio2' name='options'wrapperClass='mx-2' wrapperTag='span'label='FEMALE'defaultChecked/>
                        <MDBRadio btn btnColor='secondary' id='btn-radio3' name='options' wrapperTag='span' label='OTHER' />
                  </MDBBtnGroup>
                  </div>
                    {/* <label className="form-label" htmlFor="">Gender</label>
                    <div className="btn-group form-control">
                        <input type="radio" className="btn-check" name="gender" id="male" value="male" onChange={onGenderChange} />
                        <label className="btn btn-secondary" htmlFor="male">Male</label>

                        <input type="radio" className="btn-check" name="gender" id="female" value="female" onChange={onGenderChange} />
                        <label className="btn btn-secondary" htmlFor="female">Female</label>

                        <input type="radio" className="btn-check" name="gender" id="other" value="other" onChange={onGenderChange} />
                        <label className="btn btn-secondary" htmlFor="other">Other</label>
                    </div> */}
                </div>
                
                    {errorMessage.map((item, key ) => {
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
