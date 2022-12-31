import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';

import defaultClasses from './styles.module.css';

import useCategories from '@/talons/useCategories';
import CategoryCard from './CategoryCard';

const BuyByCategory = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const ids = ['3', '4', '5'];

    const { categories } = useCategories({
        ids
    });

    return (
        <section className={classes.buyByCategoryContainer}>
            <h2 className={classes.buyByCategoryTitle}>Compre por categoria</h2>
            <div className={classes.categoriesContainer}>
                {categories.map(item => (
                    <CategoryCard
                        name={item.name}
                        image={item.image}
                        url={`/${item.url_key}.html`}
                    />
                ))}
            </div>
        </section>
    );
};

export default BuyByCategory;
