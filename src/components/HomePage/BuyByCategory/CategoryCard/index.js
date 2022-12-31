import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { Link } from 'react-router-dom';

import defaultClasses from './styles.module.css';

const CategoryCard = ({ name, image, url, ...props }) => {
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <Link to={url} className={classes.categoryCardContainer}>
            <img src={image} alt={name} className={classes.categoryCardImage} />
            <strong className={classes.categoryCardTitle}>{name}</strong>
        </Link>
    );
};

export default CategoryCard;
