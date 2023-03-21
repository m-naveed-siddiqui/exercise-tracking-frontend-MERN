import { format } from "date-fns";
import { MDBBtnGroup, MDBRadio } from "mdb-react-ui-kit";
import { useState } from "react";

export default function ProfileForm(props) {
    // const [gender, setGender] = useState('');
    // const onGenderChange = e => {
    //     setGender(e.target.value);
    //     props.setFormData({ ...props.formData, 'gender': e.target.value })
    // };

    return (
        <>
            <h3>Update Profile</h3>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label mb-2">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="firstname" value={props.formData.firstname} onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="lastname" value={props.formData.lastname} onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" value={props.formData.email} onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="password" value={props.formData.password} onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Date of Birth</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" name="dob" value={ props.formData.dob && format(new Date(props.formData.dob), 'yyyy-MM-dd') } onChange={props.handleChange} />
                    </div>
                </div>
                {/* <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <MDBRadio btn btnColor='secondary' name='gender' className="btn-check" wrapperTag='span' value="male" label='MALE' id="male" onChange={onGenderChange} { ...props.formData.gender=='male' && defaultChecked } />
                        <MDBRadio btn btnColor='secondary' name='gender' className="btn-check" wrapperClass='mx-2' value="female" wrapperTag='span' label='FEMALE' id="female" onChange={onGenderChange} { ...props.formData.gender=='female' && defaultChecked } />
                        <MDBRadio btn btnColor='secondary' name='gender' className="btn-check" wrapperTag='span' value="other" label='OTHER' id="other" onChange={onGenderChange} { ...props.formData.gender=='other' && defaultChecked } />
                    </div>
                </div> */}
                <div className="form-group row">
                    <div className="col-sm-10 ">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        {props.errorMessage.map((item, key) => {
                            return <div className="form-outline"><small className='text-danger' key={key}>{item}</small></div>
                        })}
                        <small className='text-success'>{props.successMessage}</small>
                    </div>
                </div>
            </form>
        </>
    )
}
