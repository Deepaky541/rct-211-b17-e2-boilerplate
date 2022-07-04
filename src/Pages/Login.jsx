import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => { 
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const comingfrom=location.state?.from?.pathname || "/"
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email&&password)
    {
      dispatch(login({email,password}))
      .then((r)=>{
        if(r.type==="LOGIN_SUCCESS")
        {
          navigate(comingfrom);
      }
    }
      )

  }
}
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
