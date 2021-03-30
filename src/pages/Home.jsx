import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { useLocation, useHistory } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    // console.log(push);
    // console.log(pathname);
    // console.log(search);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        push({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <div className="Home">
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </div>
    );
};
