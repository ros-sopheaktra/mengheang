import '../css/register.css';
import axios from "axios";
import React, { useEffect, useState , useRef, useContext} from "react";
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [matchPwd, setMatchPwd] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className='register-container-fluid'> 
      <div className="container">
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4 col-sm-8 col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title text-center'>
                  <i className="fa fa-user-circle fa-4x text-info"></i>
                </h4><hr></hr>
                <form onSubmit={handleSubmit}>
                  <div className="form-group has-email">
                    <span className="fa fa-user form-control-feedback"></span>
                    <input type="text" ref={userRef} value={user} onChange={(e) => setUser(e.target.value)} className="form-control" placeholder="Username" required/>
                  </div>
                  <div className="form-group has-email mt-3">
                    <span className="fa fa-envelope form-control-feedback"></span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" required/>
                  </div>
                  <div className="form-group has-password mt-3">
                    <span className="fa fa-lock form-control-feedback"></span>
                    <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} className="form-control" placeholder="Password" required/>
                  </div>
                  <div className="form-group has-password mt-3">
                    <span className="fa fa-lock form-control-feedback"></span>
                    <input type="password" value={matchPwd} onChange={(e) => setMatchPwd(e.target.value)} className="form-control" placeholder="Password Confirm" required/>
                  </div>
                  <div className='form-group mt-3'>
                    <a href="/" className="btn btn-secondary">Cancel</a>
                    <button type="submit" className="btn btn-primary pull-right">Register</button>
                  </div>
                  <div className='form-group mt-3'>
                    <span>Already have an account? <a href="/login">Login</a></span>
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
export default Register;