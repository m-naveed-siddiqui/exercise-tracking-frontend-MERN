import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, redirect, useLocation } from "react-router-dom";
import ExerciseForm from '../../Components/ExerciseForm';
import { useParams } from 'react-router-dom';

export default function Edit(props) {
    // const { state } = useLocation();
    const params = useParams();
    const [formData, setFormData] = useState([]);
   
    // const [formData, setFormData] = useState({
    //     name: state ? state.name : '',
    //     description: state ? state.description : '',
    //     type: state ? state.type : '',
    //     duration: state ? state.duration : '',
    //     date: state ? state.date : '',
    //     id: state ? state.id : ''
    // });
    let navigate = useNavigate();

    useEffect(() => {
        axios.post('http://127.0.0.1:3000/getExerciseById',
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

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('updated : ',formData);
        // console.log(props.id);
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
    <ExerciseForm title="Update Exercise" handleSubmit={handleSubmit} handleChange={handleChange} errorMessage={errorMessage} successMessage={successMessage} formData={formData} />
  )
}
