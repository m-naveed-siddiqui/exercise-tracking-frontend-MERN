import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Exercises from './Pages/Exercises';
import AddExercise from './Pages/AddExercise';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout';
import LayoutAuth from './Components/Auth/LayoutAuth'
import { createBrowserRouter, Routes, Route, RouterProvider, BrowserRouter, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function App() {
    const login = true;

    // const RouterGuest = createBrowserRouter([
    //     { path: '/', element: <Exercises/>, errorElement: <NotFound/> },
    //     { path: '/exercise/add', element: <AddExercise/> },
    //     // rest of existance routes (Could not be 404)
    //     { path: 'register', element: <Navigate to="/"/> },
    // ]);
    // const Router = createBrowserRouter([
    //     { path: '/', element: <Login/>, errorElement: <NotFound/> },
    //     { path: '/register', element: <Register/> },
    //     // rest of existance routes (Could not be 404)
    //     { path: '/exercise/add', element: <Navigate to="/"/> },
    // ]);

    return (
        <>
            <BrowserRouter>
                {
                    login === false ?
                    <Routes>
                        <Route index element={<Login/>} />
                        <Route path='register' element={<Register/>} />
                        <Route path='exercise/add' element={<Navigate to="/"/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                    :
                    <Routes>
                        <Route index element={<Exercises/>} />
                        <Route path='/exercise/add' element={<AddExercise/>} />
                        <Route path='register' element={<Navigate to="/"/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Routes>
                }
            </BrowserRouter>

            <Helmet>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"></script>
            </Helmet>
            {/* <RouterProvider router={login===true ? Router : RouterGuest} /> */}
        </>
    )
}

export default App;
