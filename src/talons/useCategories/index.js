import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES_BY_ID } from './categories.gql';

const useCategories = ({ ids }) => {
    const [categories, setCategories] = useState([]);

    const { data } = useQuery(GET_CATEGORIES_BY_ID, {
        variables: {
            ids
        }
    });

    useEffect(() => {
        if (data.categoryList) {
            setCategories(data.categoryList);
        }
    }, [data]);

    return {
        categories
    };
};

export default useCategories;
