import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getShoes } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const {id}=useParams();
  const dispatch=useDispatch();
  const shoes=useSelector((state)=>state.AppReducer.shoes)
  const [currentShoe, setCurrentShoe] = useState({})
 useEffect(() => {
   if(shoes?.length===0)
   {
     dispatch(getShoes());
   }
 }, [shoes?.length,dispatch])
 

  useEffect(() => {
   if(id)
   {
     const temp=shoes?.find((shoes)=>shoes.id === Number(id))
     temp && setCurrentShoe(temp);
   }
  }, [shoes,id])
  
  
  return (
    <div>
      <h2>{currentShoe?.name}</h2>
      <div>
        <img src={currentShoe?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentShoe?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
