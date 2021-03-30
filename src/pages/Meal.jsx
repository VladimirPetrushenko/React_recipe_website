import { useParams,useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealByID } from "../api";
import { Preloader } from "../components/Preloader";

export const Meal = () =>{
    const {id} = useParams();
    const [meal, setMeal] = useState({});
    const {goBack} = useHistory();

    useEffect(()=>{
        getMealByID(id).then(data=>setMeal(data.meals[0]));
    },[id]);

    return  <>
                { !meal.idMeal ? <Preloader /> : (
                    <div className="Meal">
                        <img src={meal.strMealThumb} alt={meal.strMeal}/>
                        <h1>{meal.strMeal}</h1>
                        <h6>Category: {meal.strCategory}</h6>
                        {meal.strArea ? <h6>Area: {meal.strArea}</h6> : null}
                        <p>{meal.strInstructions}</p>
                        <table className="centered">
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(meal).map(key=>{
                                        if(key.includes('strIngredient') && meal[key]){
                                            return (
                                                <tr key={key}>
                                                    <td>{meal[key]}</td>
                                                    <td>
                                                        {
                                                            meal[
                                                                `strMeasure${key.slice(13)}`
                                                            ]
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </tbody>
                        </table>
                        {meal.strYoutube ? (
                            <div className="row">
                                <h5 style={{margin: '1.5rem 5rem'}}>Video Recepi</h5>
                                <iframe title={id} src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}  allowFullScreen/>
                            </div>
                         ) : null}
                    </div>
                )}
                <button className="btn" onClick={goBack}>Go Back</button>
            </>
}