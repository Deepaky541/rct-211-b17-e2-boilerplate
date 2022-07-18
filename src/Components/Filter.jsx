import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  

  
  const [searchParams, setsearchParams] = useSearchParams()
  const catFilter = searchParams.getAll("category");
    const [category, setCategory] = useState(catFilter);
  const handleCheckbox=(e)=>{
    let option=e.target.value;
    let newCategory=[...category];
    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1);
    }
    else{
      newCategory.push(option);
    }
    setCategory(newCategory)
  }
  useEffect(() => {
  if(category)
  {
    setsearchParams({category:category})
  }
  }, [category,setsearchParams])
  useEffect(()=>
  { if(category){
    let params={
      category:searchParams.getAll("category")
    }
    setsearchParams(params);
  }
  },[setsearchParams])

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Sneakers")}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            onChange={handleCheckbox}
            defaultChecked={category.includes("loafers")}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Canvas")}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Boots")}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
