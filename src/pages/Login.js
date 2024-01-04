import React, { useEffect, useState , useRef, useContext} from "react";
import '../css/login.css';
import { useNavigate } from "react-router-dom";
import AuthContext from "./controller/AuthProvider";
import users from "../data/users.json";
import axios from "axios";
const LOGIN_URL = "/login";

const LoginLayout = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });
  const [error,setError] = useState({});
  const [valid,setValid] = useState(true);

  const handleLogin = (e) =>{
    e.preventDefault();
    let isValid = true;
    let validationError = {};
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationError.password = "Password required!";
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationError.email = "Username required!";
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      isValid = false;
      validationError.email = "Username invalid!";
    }
    
    axios.get('http://localhost:8000/users')
    .then( result => {
      result.data.map(user => {
        if (user.email === formData.email) {
          if(user.password === formData.password){
            alert("Login Successfully!");
          }else{
            isValid = true;
            validationError.password = "Password invalid!";
          }
        }else if(formData.email !== ""){
          isValid = false;
          validationError.email = "Username invalid!";
        }
      })
      setError(validationError);
      setValid(isValid);
    }).catch( err => console.log(err));
  }
  return (
    <div className='login-container-fluid'> 
      <div className="container">
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4 col-sm-8 col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title text-center'>
                  <i className="fa fa-user-circle fa-4x text-info"></i>
                </h4><hr></hr>
                <form onSubmit={handleLogin}>
                  <span className={error? "text-danger":"offscreen"} aria-live="assertive">{error.email !== ""? error.email:error.password}</span>
                  <div className="form-group has-email">
                    <span className="fa fa-envelope form-control-feedback"></span>
                    <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} className={error.email !== ""? "form-control":"mt-3 form-control border border-danger"} placeholder="Eamil" required/>
                  </div>
                  <div className="form-group has-password mt-3">
                    <span className="fa fa-lock form-control-feedback"></span>
                    <input type="password" onChange={(e) => setFormData({...formData,password: e.target.value})} className={error.password !== "" ? "form-control":"form-control border border-danger"} placeholder="Password" required/>
                  </div>
                  <div className="form-check mt-3"> 
                      <input className="form-check-input" type="checkbox" id="rememberMe"/> 
                      <label className="form-check-label" for="rememberMe"> 
                        Remember me! 
                      </label> 
                  </div> 
                  <div className='form-group mt-3'>
                    <a href="/" className="btn btn-secondary">Cancel</a>
                    <button type="submit" className="btn btn-primary pull-right">Login</button>
                  </div>
                  <div className="form-group mt-3">
                    <span>Don't have an account? <a href="/register"> Register</a></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginLayout;