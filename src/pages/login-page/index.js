import React, { useState } from 'react';
import logo from "../../assets/images/logo.svg";
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
}
from 'mdb-react-ui-kit';
// import { Alert } from "@mui/material";
import AlertComponent from '../../modules/AlertComponent';
import Loading from '../../modules/Loading';
import { LOGIN_USER,SET_lOGIN } from '../../context/actionTypes/actionTypes';

function App() {
const User = useSelector((state) => state);
const dispatch = useDispatch();
    const initialState={
        email:'',
        password:'',
    }
  const [AlertMessage,setAlertMessage]=useState({});
  const [isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();
  const [Error,setError]=useState({
    emailValidation:'',
    passwordValidation:'',
});
  const [values,setValues]=useState(initialState);
  const handleLogin=async(e)=> {
    e.preventDefault();
    setIsLoading(true);
    const {email,password}=values;
       await axios.post("http://localhost:8000/api/login",{email,password})
       .then(function(response){
        console.log(response);
             if(response.data.status===200){
                localStorage.setItem('token',response.data.token);
                dispatch({
                    type:LOGIN_USER,
                    payload:response.data.user,
                });
                setIsLoading(false);
                navigate('/dashboard');
             }
        })
       .catch((error)=>{
        console.log(error.response.status);
        setIsLoading(false);
        if (error.response.status===422) {
            setError({ emailValidation:error.response.data.errors.email,
                       passwordValidation:error.response.data.errors.password
            });
        }
        else if(error.response.status===401){
            setAlertMessage(true);
        }
        else{
           setAlertMessage(false);
        }
       });
  
  }
  const handleChange=(e)=>{
         setValues({...values,[e.target.name]:e.target.value});
  }
  const onClose=()=>{
    setAlertMessage(null);
  }
  return (
      <MDBContainer className="my-5">
          <MDBCard>
              <MDBRow className="g-0">
                  <MDBCol md="8" className="mr-4">
                      <MDBCardBody className="d-flex flex-column">
                          <div className="d-flex flex-row mt-2">
                              <MDBIcon
                                  fas
                                  icon="cubes fa-3x me-3"
                                  style={{ color: "#f6219" }}
                              />
                              <span className="h1 fw-bold mb-0">
                              <img src={logo} alt="logo" style={{ marginBottom: "64px" }} />
                              </span>
                          </div>
                          <Loading isLoading={isLoading}/>

                          {AlertMessage && <AlertComponent text={"Incorrect Username Or password"} type="error"  setAlertMessage={setAlertMessage}/>}
                          <h5
                              className="fw-normal my-4 pb-3"
                              style={{ letterSpacing: "1px" }}
                          >
                          <center> Sign into your account</center>
                          </h5>{" "}
                          <form className='form-control' onSubmit={handleLogin}>
                              <MDBInput
                                  wrapperClass="mb-4"
                                  label="Email address"
                                  id="email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  type="email"
                                  size="lg"
                              /> 
                              {Error.emailValidation && <span className='btn btn-danger'>{Error.emailValidation}</span>}
                              <MDBInput
                                  wrapperClass="mb-4"
                                  label="Password"
                                  name="password"
                                  value={values.password}
                                  onChange={handleChange}
                                  id="password"
                                  type="password"
                                  size="lg"
                              />
                              {Error.passwordValidation && <span className='btn btn-danger'>{Error.passwordValidation}</span>}

                              <button
                                  type='submit'
                                  className="form- btn btn-primary mb-4 px-5"
                                  color="dark"
                                  size="lg">
                                  Login
                              </button>
                          </form>
                          <a className="small text-muted" href="#!">
                              Forgot password?
                          </a>
                          <p
                              className="mb-5 pb-lg-2"
                              style={{ color: "#393f81" }}
                          >
                              Don't have an account?{" "}
                              <a href="#!" style={{ color: "#393f81" }}>
                                  Register here
                              </a>
                          </p>
                          <div className="d-flex flex-row justify-content-start">
                              <a href="#!" className="small text-muted me-1">
                                  Terms of use.
                              </a>
                              <a href="#!" className="small text-muted">
                                  Privacy policy
                              </a>
                          </div>
                      </MDBCardBody>
                  </MDBCol>
              </MDBRow>
          </MDBCard>
      </MDBContainer>
  );
}

export default App;