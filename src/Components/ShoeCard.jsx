import React from "react";
import "./shoecard.css";

const ShoeCard = ({data}) => {
  let shoeId = data.id;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} className="shoecard" >
      <div>
        <img className="image" data-cy="shoe-card-image" src={data.image} alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{data.name}</div>
        <div data-cy="shoe-category">{data.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
