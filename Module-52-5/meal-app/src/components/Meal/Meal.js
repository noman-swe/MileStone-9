import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { handleAddToOrder, meal } = props;
    const { strMeal, strInstructions, strMealThumb } = meal;
    return (
        <div className='meal'>
            <div className="">
                <img src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0, 100)}</p>
                <button onClick={() => handleAddToOrder(meal)}>Add this food</button>
            </div>
        </div>
    );
};

export default Meal;