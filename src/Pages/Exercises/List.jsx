import { Link } from "react-router-dom";
import ExerciseCard from "../../Components/ExerciseCard";
import { useEffect, useState } from "react";
// import { Cookies } from "react-cookie";
import axios from "axios";

export default function Exercises() {
    const [exercises, setExercises] = useState([]);
    // const cookies = new Cookies()

    // useEffect( ()=> {
    //     fetch(import.meta.env.VITE_API_HOST+'getAllExercises',{
    //         headers:{
    //             "Authorization":cookies.get('token')
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         setData(data)
    //         console.log(data)
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },[])

    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_HOST+'getAllExercises', {
            headers: {
                'Content-Type': 'application/json',
                "authorization":localStorage.getItem("user")
            },
        }).then(res => {
            setExercises(res.data);
        }).catch(error => console.log(error.message));
    }, [refresh]);

    return (
        <>
            {/* <label className="welcome-label">Welcome <span>Naveed Siddiqui</span></label> */}
            
            {exercises.length ? <h5 className="mb-3">Track your progress and stay motivated with your exercises!</h5> : <div>
                    <h5 className="mb-3">Let's get moving - add your first exercise to your list!</h5>
                    <Link to="/exercise/add" className="btn btn-primary">Add Exercise</Link>
                </div>}

            {/* <h5 className="mb-3">Track your progress and stay motivated with your exercises!</h5> */}
            {/* Filter Search add here */}

            <div className="card-deck text-center">

                <div className="list-group">
                    { exercises.map((exercise, index) => {
                        return <ExerciseCard key={index} id={exercise._id} name={exercise.name} description={exercise.description} type={exercise.type} duration={exercise.duration} date={exercise.date} refresh={refresh} setRefresh={setRefresh} />
                    }) }
                </div>
            </div>
        </>
    )
}
