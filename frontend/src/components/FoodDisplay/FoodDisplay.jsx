import React, { useContext } from "react";
import './FoodDisplay.css'
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../FoodItem/Fooditem";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishesh Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <Fooditem
              key={index}
              id={item._id}
              name={TextMetrics.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
