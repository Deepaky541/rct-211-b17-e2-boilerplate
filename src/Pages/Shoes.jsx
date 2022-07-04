import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import { getShoes } from "../Redux/AppReducer/action";
import { useEffect } from "react";
import ShoeCard from "../Components/ShoeCard";
import "./shoe.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.AppReducer.shoes);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (shoes.length === 0 || location.search) {
      let getParams = { params: { category: searchParams.getAll("category") } };
      dispatch(getShoes(getParams));
    }
    else{
      dispatch(getShoes());
    }
  }, [location.search]);
  return (
    <div>
      <Filter />
      <div className="shoe">
        {shoes.map((shoe) => (
          <Link to={`/shoes/${shoe.id}`}>
          <ShoeCard key={shoe.id} data={shoe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
