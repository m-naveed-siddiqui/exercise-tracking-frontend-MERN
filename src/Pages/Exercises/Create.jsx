import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ExerciseForm from '../../Components/ExerciseForm';

export default function Create() {   
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState([]);
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(import.meta.env.VITE_API_HOST+'addExercise',
            formData , {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("user")
            },
        }).then(res => {
            navigate('/')
        }).catch(error => {
            if (error.response) {
                setErrorMessage(Object.values(error.response.data));
            } else {
                setErrorMessage([error.message])
            }

        });
    };
    
  return (
    <ExerciseForm title="Add Exercise" handleSubmit={handleSubmit} handleChange={handleChange} errorMessage={errorMessage} formData={formData} />
  )
}
