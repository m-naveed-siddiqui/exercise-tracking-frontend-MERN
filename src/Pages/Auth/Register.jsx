import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Register() {
    // const [fName, setFName] = useState('');
    // const [lName, setLName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [dob, setDob] = useState('');
    // const [gender, setGender] = useState('');
    const set_fname = useRef();
    const set_lName = useRef();
    const set_email = useRef();
    const set_password = useRef();
    const set_dob = useRef();
    const set_gender = useRef();

    const handleRegister = (e) => {
        e.preventDefault();

        const firstname = set_fname.current.value;
        const lastname = set_lName.current.value;
        const email = set_email.current.value;
        const password = set_password.current.value;
        const dob = set_dob.current.value;
        const gender = set_gender.current.value;
        
        const data = {firstname, lastname, email, password, dob, gender};
        console.log(data);
        // fetch('http://127.0.0.1:3000/register',{
        //     method:"POST",
        //     body: JSON.stringify(data),
        // });
    };
    return (
        <>
            <form onSubmit={handleRegister}>
                <p>We warmly welcome you</p>

                <div className="row">
                    <div className="col-6">
                        <div className="form-outline mb-4">
                            <input type="text" id="fname" className="form-control"
                                placeholder="Your first name" required ref={set_fname} />
                            <label className="form-label" htmlFor="fname">First Name</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-outline mb-4">
                            <input type="text" id="lname" className="form-control"
                                placeholder="Your last name" required ref={set_lName} />
                            <label className="form-label" htmlFor="lname">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control"
                        placeholder="your@email.com" required ref={set_email} />
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control"
                        placeholder="Please create yor password" required ref={set_password} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="date" id="dob" className="form-control" required ref={set_dob} />
                    <label className="form-label" htmlFor="dob">Date of Birth</label>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="">Gender</label>
                    <div className="btn-group form-control">
                        <input type="radio" className="btn-check" name="gender" id="male" required ref={set_gender} />
                        <label className="btn btn-secondary" htmlFor="male">Male</label>

                        <input type="radio" className="btn-check" name="gender" id="female" ref={set_gender} />
                        <label className="btn btn-secondary" htmlFor="female">Female</label>

                        <input type="radio" className="btn-check" name="gender" id="other" ref={set_gender} />
                        <label className="btn btn-secondary" htmlFor="other">Other</label>
                    </div>
                </div>
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
