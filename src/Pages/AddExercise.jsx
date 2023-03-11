import Layout from "../Components/Layout";
import ExerciseCard from "../Components/ExerciseCard";

export default function AddExercise() {
    return (
        <>
            <h5>Add Exercise</h5>
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Exercise Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="type" className="col-sm-2 col-form-label">Activity Type</label>
                    <div className="col-sm-10">
                        <select id="type" className="form-control">
                            <option selected>Choose...</option>
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
                        <input type="number" className="form-control" id="duration" aria-describedby="duration-hint"/>
                            <small id="duration-hint" className="text-muted">mins</small>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="date"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Add Exercise</button>
                    </div>
                </div>
            </form>
        </>
    )
}
