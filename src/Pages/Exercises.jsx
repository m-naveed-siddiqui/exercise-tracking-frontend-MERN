import Layout from "../Components/Layout";
import ExerciseCard from "../Components/ExerciseCard";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

export default function Exercises() {
    const [data, setData] = useState('');
    const cookies = new Cookies()

    // useEffect( ()=> {
    //     fetch('http://10.241.72.232:3000/getAllExercises',{
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
    return (
        <Layout>
            {/* <label className="welcome-label">Welcome <span>Naveed Siddiqui</span></label> */}

            <h5 className="mb-3">Here Is Your Exercise Summary</h5>
            {/* Filter Search add here */}

            <div className="card-deck text-center">

                <div className="list-group">
                    <ExerciseCard />
                </div>
            </div>
        </Layout>
    )
}
