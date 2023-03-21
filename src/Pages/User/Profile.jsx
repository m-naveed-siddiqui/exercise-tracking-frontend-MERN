import { useState, useEffect } from "react";
import axios from "axios";
import ProfileForm from "../../Components/User/ProfileForm";
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile(props) {
    const [formData, setFormData] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_HOST+'getUser',
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
        setSuccessMessage('');
        setErrorMessage([]);
        console.log(formData);
        axios.put(import.meta.env.VITE_API_HOST+'updateUser',
            formData , {
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem("user")
            },
        }).then(res => {
            setSuccessMessage("Profile Updated Successfully");
            props.setProfile(formData);
            // setTimeout(() => {
            //     navigate('/');
            // }, 1000);
        }).catch(error => {
            if (error.response) {
                setErrorMessage(Object.values(error.response.data));
            } else {
                setErrorMessage([error.message])
            }

        });
    }

  return (
    <ProfileForm handleSubmit={handleSubmit} handleChange={handleChange} errorMessage={errorMessage} formData={formData} setFormData={setFormData} successMessage={successMessage} />
  )
}
