import { useState, useEffect } from "react";
import { getFilteredCategory } from "../api";
import { useParams } from "react-router-dom";

import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

export const Category = () =>{
    const {strCategory} = useParams();
    const [category, setCategory] = useState([]);
    
    useEffect(()=>{
        getFilteredCategory(strCategory).then(data => setCategory(data.meals));
    }, [strCategory]);
    
    return <div className="Category">
        {!category.length ? <Preloader />:
            <MealList meals={category}/>
        }
    </div>
}