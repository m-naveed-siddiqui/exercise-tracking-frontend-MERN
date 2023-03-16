import { useState } from "react";
import axios from "axios";
import { useNavigate, redirect, useLocation } from "react-router-dom";
import ExerciseForm from '../../Components/ExerciseForm';

export default function Create() {
    const { state } = useLocation();
   
    const [formData, setFormData] = useState({
        name: state ? state.name : '',
        description: state ? state.description : '',
        type: state ? state.type : '',
        duration: state ? state.duration : '',
        date: state ? state.date : '',
        id: state ? state.id : ''
    });
    let navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        axios.post('http://127.0.0.1:3000/addExercise',
            formData , {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("user")
            },
        }).then(res => {
            //setSuccessMessage(res.data);
            navigate('/')
        }).catch(error => setErrorMessage(error.message));
    };
    
  return (
    <ExerciseForm handleSubmit={handleSubmit} handleChange={handleChange} errorMessage={errorMessage} successMessage={successMessage} formData={formData} state={state} />
  )
}
