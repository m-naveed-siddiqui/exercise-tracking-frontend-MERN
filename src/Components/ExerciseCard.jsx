import { format } from "date-fns";
import ExerciseForm from "./ExerciseForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ExerciseCard(props) {
    console.log(props)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/exercise/update/' + props.id)
    }
    const handleDelete = () => {
        if(confirm("Are You sure you want to delete?")) {
            axios.post('http://127.0.0.1:3000/deleteExerciseById',
                {"id":props.id} , {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": localStorage.getItem("user")
                },
            }).then(res => {
                console.log(res.data);
                props.setRefresh(true);
            }).catch(error => console.error(error.message));
        }
    }

    // const [basicModal, setBasicModal] = useState(false);
    // const toggleShow = () => setBasicModal(!basicModal);
    return (
        <div className="card mb-3 list-group-item list-group-item-action">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <strong>Activity Type:</strong> <label>{props.type}</label>
                </li>
                <li className="list-group-item">
                    <strong>Duration:</strong> <label>{props.duration} mins</label>
                </li>
                <li className="list-group-item">
                    {/* yyyy/MM/dd kk:mm:ss */}
                    <strong>Date:</strong> <label>{ format(new Date(props.date), 'yyyy-MM-dd') }</label>
                </li>
            </ul>
            <div className="card-body">
                <button className="btn btn-primary mx-2" onClick={handleClick}>Edit</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
