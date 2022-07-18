import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";

const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const log=()=>{
      dispatch(logout())
      navigate("/");
  }

  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {
          isAuth?<button onClick={log}>logout</button>:<Link to="/login"><button>login</button></Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
