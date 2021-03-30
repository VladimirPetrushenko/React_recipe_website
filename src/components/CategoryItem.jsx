import { Link } from "react-router-dom";

export const CategoryItem = (props) => {
    const {
        idCategory,
        strCategory,
        strCategoryDescription,
        strCategoryThumb,
    } = props;

    return  <div className="card" id={idCategory}>
                <div className="card-image">
                    <img src={strCategoryThumb} alt={strCategory}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{strCategory}</span>
                    <p>{strCategoryDescription.slice(0,100)}...</p>
                </div>
                <div className="card-action">
                    <Link to={`/category/${strCategory}`} className="btn">Watch category</Link>
                </div>
            </div>
}