import Layout from '../../Components/Auth/LayoutAuth';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <Layout>
            <form>
                <p>We warmly welcome you</p>

                <div className="row">
                    <div className="col-6">
                        <div className="form-outline mb-4">
                            <input type="text" id="fname" className="form-control"
                                placeholder="Your first name" />
                            <label className="form-label" htmlFor="fname">First Name</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-outline mb-4">
                            <input type="text" id="lname" className="form-control"
                                placeholder="Your last name" />
                            <label className="form-label" htmlFor="lname">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control"
                        placeholder="your@email.com" />
                    <label className="form-label" htmlFor="email">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control"
                        placeholder="Please create yor password" />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="date" id="dob" className="form-control" />
                    <label className="form-label" htmlFor="dob">Date of Birth</label>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="">Gender</label>
                    <div className="btn-group form-control">
                        <input type="radio" className="btn-check" name="gender" id="male" />
                        <label className="btn btn-secondary" htmlFor="male">Male</label>

                        <input type="radio" className="btn-check" name="gender" id="female" />
                        <label className="btn btn-secondary" htmlFor="female">Female</label>

                        <input type="radio" className="btn-check" name="gender" id="other" />
                        <label className="btn btn-secondary" htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">
                        Sign up now
                    </button>
                </div>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Already have an account?</p>
                    <Link to="/" className="btn btn-outline-danger">Log in</Link>
                </div>
            </form>
        </Layout>
    )
}
