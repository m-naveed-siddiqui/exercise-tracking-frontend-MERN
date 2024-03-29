import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ExerciseForm from '../../Components/ExerciseForm';
import { useParams } from 'react-router-dom';

export default function Edit(props) {
    // const { state } = useLocation();
    const params = useParams();

    const [formData, setFormData] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    // const [formData, setFormData] = useState({
    //     name: state ? state.name : '',
    //     description: state ? state.description : '',
    //     type: state ? state.type : '',
    //     duration: state ? state.duration : '',
    //     date: state ? state.date : '',
    //     id: state ? state.id : ''
    // });

    const navigate = useNavigate();

    useEffect(() => {
        axios.post(import.meta.env.VITE_API_HOST+'getExerciseById',
        {'id':params.id},
        {
            headers: {
                'Content-Type': 'application/json',
                "authorization":localStorage.getItem("user")
            },
        }).then(res => {
            setFormData(res.data);
        }).catch(error => console.log(error.message));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('updated : ',formData);
        // console.log(props.id);
        axios.put(import.meta.env.VITE_API_HOST+'updateExerciseById',
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
    }

  return (
    <ExerciseForm title="Update Exercise" handleSubmit={handleSubmit} handleChange={handleChange} errorMessage={errorMessage} formData={formData} />
  )
}
