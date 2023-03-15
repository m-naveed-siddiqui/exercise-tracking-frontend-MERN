import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Exercises from './Pages/Exercises';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout';
import LayoutAuth from './Components/Auth/LayoutAuth';
import { useEffect, useState } from 'react';
import ExerciseForm from './Components/ExerciseForm';

function App() {
    const check = localStorage.getItem('user') ? true : false;
    const [isLogin, setIsLogin] = useState(check);
    // useEffect(() => {
    //     localStorage.getItem('user') && setIsLogin(true);
    // }, [isLogin]);
    
    const queryClient = new QueryClient();

    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound login={isLogin}/>,
            children: [
                { path: "/", element: <Exercises/> },
                { path: '/exercise/add', element: <ExerciseForm/> },
                { path: '/exercise/update', element: <ExerciseForm/> },
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
                { path: "/register", element: <Register /> },
                // rest of existing (but not authorized) routes. [Could not be 404]
                { path: "/exercise/add", element: <Navigate to="/"/> },
                { path: "/exercise/update", element: <Navigate to="/"/> },
            ]
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
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
            
            {/* <Helmet>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"></script>
            </Helmet> */}
        </QueryClientProvider>
    )
}

export default App;
