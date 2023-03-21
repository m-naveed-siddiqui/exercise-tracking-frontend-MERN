import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Exercises from './Pages/Exercises/List';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout';
import LayoutAuth from './Components/Auth/LayoutAuth';
import { useEffect, useState } from 'react';
import CreateExercise from './Pages/Exercises/Create';
import EditExercise from './Pages/Exercises/Edit';
import Profile from './Pages/User/Profile';

function App() {
    const check = localStorage.getItem('user') ? true : false;
    const [isLogin, setIsLogin] = useState(check);
    const [profile, setProfile] = useState([]);
    // useEffect(() => {
    //     localStorage.getItem('user') && setIsLogin(true);
    // }, [isLogin]);
    
    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Layout setIsLogin={setIsLogin} profile={profile} setProfile={setProfile} />,
            errorElement: <NotFound login={isLogin}/>,
            children: [
                { path: "/", element: <Exercises/> },
                { path: '/exercise/add', element: <CreateExercise/> },
                { path: '/exercise/update/:id', element: <EditExercise/> },
                { path: '/profile', element: <Profile setProfile={setProfile}/> },
                // rest of existing (but not authorized) routes. [Could not be 404]
                { path: '/register', element: <Navigate to="/"/> },
            ]
        },
    ]);
    const RouterGuest = createBrowserRouter([
        {
            path: "/",
            element: <LayoutAuth />,
            errorElement: <NotFound login={isLogin}/>,
            children: [
                { path: "/", element: <Login setIsLogin={setIsLogin} /> },
                { path: "/register", element: <Register setIsLogin={setIsLogin} /> },
                // rest of existing (but not authorized) routes. [Could not be 404]
                { path: "/exercise/*", element: <Navigate to="/"/> },
                { path: "/profile", element: <Navigate to="/"/> }
            ]
        },
    ]);

    return (
        <>
            {/* <BrowserRouter>
                {
                    login ?
                    <Routes>
                        <Route index element={<Exercises/>} />
                        <Route path='/exercise/add' element={<AddExercise/>} />
                        <Route path='register' element={<Navigate to="/"/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                    :
                    <Routes>
                        <Route index element={<Login/>} />
                        <Route path='register' element={<Register/>} />
                        <Route path='exercise/add' element={<Navigate to="/"/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                }
            </BrowserRouter> */}
            <RouterProvider router={isLogin ? Router : RouterGuest} />
        </>
    )
}

export default App;
