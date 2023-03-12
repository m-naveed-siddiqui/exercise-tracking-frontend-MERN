import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Exercises from './Pages/Exercises';
import AddExercise from './Pages/AddExercise';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout';
import LayoutAuth from './Components/Auth/LayoutAuth';
import { useEffect, useState } from 'react';

function App() {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        localStorage.getItem('user') && setIsLogin(true);
    }, []);
    
    const queryClient = new QueryClient();

    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound login={isLogin}/>,
            children: [
                { path: "/", element: <Exercises/> },
                { path: '/exercise/add', element: <AddExercise/> },
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
            
            <Helmet>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"></script>
            </Helmet>
        </QueryClientProvider>
    )
}

export default App;
