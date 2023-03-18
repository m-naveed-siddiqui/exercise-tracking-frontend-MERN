import { setDate } from 'date-fns/esm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function EditExercise() {
    const params = useParams();
const [formData, setFormData] = useState({});

    useEffect(() => {
        async function getExercise() {
            const res = await fetch('http://localhost:5000/api/exercise/' + params.id)
            const data = await res.json();

            if (true) {
                setFormData(data)
            }

        }

        getExercise();
    }, [])


    
    let navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
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
            // setSuccessMessage(res.data);
            navigate('/')
        }).catch(error => setErrorMessage(error.message));
    }

    
    return (
        <>
        <h3> {state ? "Update Exercise" : "Add Exercise"}</h3>
        <form onSubmit={state ? updateExercise : createExercise}>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label mb-2">Exercise Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" value={formData.name} name="name" required onChange={handleChange} />
                </div>
            </div>
            <div className="form-group row mb-3">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea className="form-control" id="description" value={formData.description} name="description" required onChange={handleChange} ></textarea>
                </div>
            </div>
            <div className="form-group row mb-3 ">
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
            <div className="form-group row mb-4">
                <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" id="date" name="date" value={ formData.date && format(new Date(formData.date), 'yyyy-MM-dd') } required onChange={handleChange} />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10 ">
                    <button type="submit" className="btn btn-primary">{state ? "Update Exercise" : "Add Exercise"}</button>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    {/* <small className='text-success'>{successMessage}</small> */}
                    <small className='text-danger'>{errorMessage}</small>
                </div>
            </div>
        </form>
    </>
    )
}