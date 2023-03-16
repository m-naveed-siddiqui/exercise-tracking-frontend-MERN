import { format } from "date-fns";

export default function ExerciseForm(props) {
    return (
        <>
            <h3> {props.state ? "Update Exercise" : "Add Exercise"}</h3>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label mb-2">Exercise Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" value={props.formData.name} name="name" required onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" value={props.formData.description} name="description" required onChange={props.handleChange} ></textarea>
                    </div>
                </div>
                <div className="form-group row mb-3 ">
                    <label htmlFor="type" className="col-sm-2 col-form-label">Activity Type</label>
                    <div className="col-sm-10">
                        <select id="type" className="form-control" name="type" value={props.formData.type} required onChange={props.handleChange} >
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
                        <input type="number" className="form-control" id="duration" name="duration" value={props.formData.duration} required aria-describedby="duration-hint" onChange={props.handleChange} />
                        <small id="duration-hint" className="text-muted">mins</small>
                    </div>
                </div>
                <div className="form-group row mb-4">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="date" name="date" value={ props.formData.date && format(new Date(props.formData.date), 'yyyy-MM-dd') } required onChange={props.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 ">
                        <button type="submit" className="btn btn-primary">{props.state ? "Update Exercise" : "Add Exercise"}</button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        {/* <small className='text-success'>{props.successMessage}</small> */}
                        <small className='text-danger'>{props.errorMessage}</small>
                    </div>
                </div>
            </form>
        </>
    )
}
