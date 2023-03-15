import logo from '../../assets/logo.png';
import bg from '../../assets/bg2.jpg';
import { Outlet } from 'react-router-dom';

export default function LayoutAuth(Components) {
  return (
    // WARNING: 'gradient-form' class preventing style when height increasing
    <>
    <section className="h-100 gradient-form" style={{'backgroundColor':'#eee'}}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <div className="card-body p-md-5 mx-md-4">

                                    <div className="text-center">
                                        <img src={logo} style={{'width': '127px'}} alt="logo" />
                                        <h4 className="mt-1 mb-5 pb-1">We motive the world strong</h4>
                                    </div>

                                    <Outlet/>
                                    {/* If without outlet, so accept children */}
                                    {Components.children}
    
                                </div>
                            </div>
                            {/* <div className="col-lg-6 d-flex align-items-center gradient-custom-2"> */}
                            <div className="col-lg-6 d-flex align-items-center"
                                style={{"background":"url("+bg+")", "backgroundSize":"100%", "backgroundRepeat":"no-repeat", "opacity":"0.8"}} >
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4"
                                    style={{"background":"#000", "opacity":"0.9"}} >
                                    <h4 className="mb-4">We are more than just a company</h4>
                                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  )
}
