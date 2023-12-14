import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value);
    }

    const handleAddToOrder = clickedMeal => {
        console.log(clickedMeal);
    }


    return (
        <div>
            <h2 className="">Restaurant</h2>
            <input onChange={searchFood} type="text" name="" id="" />
            <br />
            <h3>Result Found : {meals.length}</h3>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal 
                    meal = {meal}
                    key={meal.idMeal}
                    handleAddToOrder={handleAddToOrder}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;