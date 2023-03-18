import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Exercises from './Pages/Exercises/List';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout';
import LayoutAuth from './Components/Auth/LayoutAuth';
import { useEffect, useState } from 'react';
// import ExerciseForm from './Components/ExerciseForm';
import CreateExercise from './Pages/Exercises/Create';
import EditExercise from './Pages/Exercises/Edit';

function App() {
    const check = localStorage.getItem('user') ? true : false;
    const [isLogin, setIsLogin] = useState(check);
    // useEffect(() => {
    //     localStorage.getItem('user') && setIsLogin(true);
    // }, [isLogin]);
    
    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Layout setIsLogin={setIsLogin} />,
            errorElement: <NotFound login={isLogin}/>,
            children: [
                { path: "/", element: <Exercises/> },
                { path: '/exercise/add', element: <CreateExercise/> },
                { path: '/exercise/update/:id', element: <EditExercise/> },
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
                { path: "/", element: <Login/> },
                { path: "/register", element: <Register setIsLogin={setIsLogin} /> },
                // rest of existing (but not authorized) routes. [Could not be 404]
                { path: "/exercise/*", element: <Navigate to="/"/> }
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
