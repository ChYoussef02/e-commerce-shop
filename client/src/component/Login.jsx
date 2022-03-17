import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../redux/action/userActions';


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch() ;
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

    return (
        <div className="container-fluid ">
        <main className=" d-flex justify-content-center ">
        <form className="mx-5  my-5" onSubmit={submitHandler} >
          <img className="mx-5" src="https://img.search.brave.com/ZNJnqxiirr7CoQqkqODt5tfJx2T1p2DfetA6bSi6b7A/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/WDVZQ01uT05ubkJm/dFJfMTgwUzBnSGFI/YSZwaWQ9QXBp" alt="login" width={50} height={50} />
          <br />
          <br />
          
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
             
          <div className="form-floating ">
            <input type="email" className="form-control w-100 " id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="floatingInput ">Email address</label>
          </div>
          <div className="form-floating ">
              
            <input type="password" className="form-control w-100 " id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-outline-dark " type="submit">Sign in</button>
          
        </form>
      </main>
      </div>
  
    )
 }


export default Login

