import logo from '../assets/logo.png';
import { Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Layout(Components) {
    // const [profile, setProfile] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_HOST+'getUser', {
            headers: {
                'Content-Type': 'application/json',
                "authorization":localStorage.getItem("user")
            },
        }).then(res => {
            Components.setProfile(res.data);
        }).catch(error => console.log(error.message));
    }, []);

    const handleLogout = () => {
        localStorage.clear('user');
        // location.reload();
        Components.setIsLogin(false)
    };

    return (
        <>
            <section className="h-100" style={{ 'backgroundColor': '#eee' }}>
                <div className="container-fluid py-5 h-100">

                    <div className="row mb-3">
                        <div className="col-2">
                            <img src={logo} style={{ 'width': '190', 'height': '80px' }} alt="logo" loading="eager" />
                        </div>
                        {/* <div className="col-8">
                            <div className="container">
                                <label className="welcome-label">Welcome <span>Naveed Siddiqui</span></label>
                            </div>
                        </div> */}
                    </div>

                    <div className="row d-flex h-100">
                        {/* Left Bar */}
                        <div className="col-2">
                            <div className="leftbar">
                                <div className="list-group mt-3">
                                    <NavLink to="/" className="list-group-item list-group-item-action">My Exercises</NavLink>
                                    <NavLink to="/exercise/add" className="list-group-item list-group-item-action">Add Exercise</NavLink>
                                    <NavLink to="/profile" className="list-group-item list-group-item-action">Profile</NavLink>
                                    <NavLink to="javascript:;" className="list-group-item list-group-item-action" onClick={handleLogout}>Logout</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="col-8">
                            <div className="container wrapper">
                                
                                <Outlet/>
                                {/* If without outlet, so accept children */}
                                {Components.children}

                            </div>
                        </div>
                        {/* Right Bar */}
                        <div className="col-2">
                            <div className="rightbar">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4 mb-3" style={{ 'width': '150px', 'height': '150px' }}
                                    alt="Avatar" />
                                <h5 className="mb-2"><strong>{Components.profile.firstname+' '+Components.profile.lastname}</strong></h5>
                                <p className="text-muted">{Components.profile.exercises && Components.profile.exercises.length} Exercises</p>
                                {/* <div className="profile-detail">
                                    <div className="list-group">
                                        <NavLink to="javascript:;" className="list-group-item active">{Components.profile.exercises && Components.profile.exercises.length} Times Exercise</NavLink>
                                        <NavLink to="javascript:;" className="list-group-item">Run: 15 (Times)</NavLink>
                                        <NavLink to="javascript:;" className="list-group-item">Bicycle Ride: 18 (Times)</NavLink>
                                        <NavLink to="javascript:;" className="list-group-item">Swim: 2 (Times)</NavLink>
                                        <NavLink to="javascript:;" className="list-group-item">Walk: 0 (Times)</NavLink>
                                        <NavLink to="javascript:;" className="list-group-item">Hike: 0 (Times)</NavLink>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
