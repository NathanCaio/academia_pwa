import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CATEGORIES_BY_ID } from './categories.gql';

const useCategories = ({ ids }) => {
    const [categories, setCategories] = useState([]);

    const [fetchCategories] = useLazyQuery(GET_CATEGORIES_BY_ID);

    const getCategories = async ids => {
        const { data } = await fetchCategories({
            variables: {
                ids
            }
        });

        setCategories(data.categoryList);
    };

    useEffect(() => {
        if (categories.length === 0) {
            getCategories(ids);
        }
    }, [categories.length]);

    return {
        categories
    };
};

export default useCategories;
