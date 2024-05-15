import Container from "@/LayOut/Container";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/consultation/layout.jpg';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";



const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])
    
    const handleValidateCaptcha = ()=> {
  
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
  }
  


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogin = (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
            console.log(email, password);
    }
   
    
    return (
       <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <Container className="">
            <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left max-w-sm">
      <h1 className="text-5xl font-extrabold text-teal-500">Login now!</h1>
      <p className="py-6">Empowering Health, Enlightening Choice - Your Prescription for Informed Savings.</p>
    </div>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
            <label className="label">
                <span><LoadCanvasTemplate></LoadCanvasTemplate></span>
                
            </label>
               
            <label>
                <span className="label-text">Captcha</span>
            </label>
         
            <input type="text" name="captcha" ref={captchaRef} placeholder="type the text above" className="input input-bordered mt-2" required />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
          
        </div>
        
        <div className="form-control mt-6">
                <input disabled={disable} type="submit" className="btn btn-primary" value="Login" />
                </div>
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">Don't have an account?</Link>
          </label>
      </form>
    </div>
  </div>
            </Container>
        </div>
       
    );
};

export default Login;