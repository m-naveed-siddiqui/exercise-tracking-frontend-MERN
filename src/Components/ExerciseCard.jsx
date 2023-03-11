
export default function ExerciseCard() {
    return (
        <div className="card mb-3 list-group-item list-group-item-action">
            <div className="card-body">
                <h5 className="card-title">Jogging</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong>Activity Type:</strong> <label>Run</label>
                </li>
                <li className="list-group-item">
                    <strong>Duration:</strong> <label>20 mins</label>
                </li>
                <li className="list-group-item">
                    <strong>Date:</strong> <label>22-02-2023</label>
                </li>
            </ul>
            <div className="card-body">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}
