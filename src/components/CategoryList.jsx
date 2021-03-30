import { CategoryItem } from "./CategoryItem";
export const CategoryList = (props) => {
    const {
        catalog
    } = props;
    return <div className="category-list">
                {
                    catalog.map(el=> <CategoryItem key={el.idCategory} {...el}/>)
                }
            </div>
}