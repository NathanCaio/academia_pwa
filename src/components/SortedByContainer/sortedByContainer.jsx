import React from 'react';
import PropTypes from 'prop-types';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/SortedByContainer/sortedByContainer.module.css';

const SortedByContainer = props => {
    const { currentSort } = props;

    const classes = useStyle(defaultClasses, props.classes);

    const sortsMap = {
        'Best Match': 'Mais relevantes',
        Position: 'Posição',
        'Price: High to Low': 'Maiores preços',
        'Price: Low to High': 'Menores preços',
        'Product Name': 'Nome'
    };

    return (
        <div className={classes.root} aria-busy="true">
            Itens ordenados por{' '}
            <span className={classes.sortText}>
                {sortsMap[currentSort.sortText] || currentSort.sortText}
            </span>
        </div>
    );
};

export default SortedByContainer;

SortedByContainer.propTypes = {
    shouldDisplay: PropTypes.bool,
    currentSort: PropTypes.shape({
        sortId: PropTypes.string,
        sortText: PropTypes.string
    })
};
