import { useRef, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

export default function ExerciseForm(props) {
    const { state } = useLocation();
    // console.log(state);
    const [formData, setFormData] = useState({
        name: state ? state.name : '',
        description: state ? state.description : '',
        type: state ? state.type : '',
        duration: state ? state.duration : '',
        date: state ? state.date : '',
        id: state ? state.id : ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const createExercise = (e) => {
        e.preventDefault();
        // console.log(formData);
        axios.post('http://127.0.0.1:3000/addExercise',
            formData , {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("user")
            },
        }).then(res => {
            setSuccessMessage(res.data);
        }).catch(error => setErrorMessage(error.message));
    };
    const updateExercise = (e)=>{
        e.preventDefault();
        console.log('updated : ',formData);
        console.log(props.id);
        axios.put('http://127.0.0.1:3000/updateExerciseById',
            formData , {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("user")
            },
        }).then(res => {
            setSuccessMessage(res.data);
        }).catch(error => setErrorMessage(error.message));
    }

    return (
        <>
            <h5> {state ? "Update Exercise" : "Add Exercise"}</h5>
            <form onSubmit={state ? updateExercise : createExercise}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Exercise Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" value={formData.name} name="name" required onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" value={formData.description} name="description" required onChange={handleChange} ></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="type" className="col-sm-2 col-form-label">Activity Type</label>
                    <div className="col-sm-10">
                        <select id="type" className="form-control" name="type" value={formData.type} required onChange={handleChange} >
                            <option selected value="">Choose...</option>
                            <option value="run">Run</option>
                            <option value="bicycle_ride">Bicycle Ride</option>
                            <option value="swim">Swim</option>
                            <option value="walk">Walk</option>
                            <option value="hike">Hike</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="duration" className="col-sm-2 col-form-label">Duration</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="duration" name="duration" value={formData.duration} required aria-describedby="duration-hint" onChange={handleChange} />
                        <small id="duration-hint" className="text-muted">mins</small>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="date" name="date" value={ formData.date && format(new Date(formData.date), 'yyyy-MM-dd') } required onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">{state ? "Update Exercise" : "Add Exercise"}</button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <small className='text-success'>{successMessage}</small>
                        <small className='text-danger'>{errorMessage}</small>
                    </div>
                </div>
            </form>
        </>
    )
}
