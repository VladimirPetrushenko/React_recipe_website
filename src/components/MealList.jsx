import { useHistory } from "react-router-dom";
import { MealItem } from "./MealItem";

export const MealList = (props) =>{
    const {meals} = props;
    
    const {goBack} = useHistory();
    return <>
            <button className="btn" onClick={goBack}>Go Back</button>
            <div className="meal-list">
                {
                    meals.map(el=><MealItem key={el.idMeal} {...el}/>)
                }
            </div>
    </>
}