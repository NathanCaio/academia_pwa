import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { useFilterFooter } from '@magento/peregrine/lib/talons/FilterModal';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Button from '@magento/venia-ui/lib/components/Button';
import defaultClasses from '@magento/venia-ui/lib/components/FilterModal/filterFooter.module.css';

const FilterFooter = props => {
    const { applyFilters, hasFilters, isOpen } = props;
    const { touched } = useFilterFooter({
        hasFilters,
        isOpen
    });

    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <Button
                disabled={!touched}
                onClick={applyFilters}
                data-cy="FilterFooter-button"
                aria-label={'Filtrar produtos'}
                aria-disabled={!touched}
                priority="high"
            >
                Filtrar produtos
            </Button>
        </div>
    );
};

FilterFooter.propTypes = {
    applyFilters: func.isRequired,
    classes: shape({
        root: string
    }),
    hasFilters: bool,
    isOpen: bool
};

export default FilterFooter;
