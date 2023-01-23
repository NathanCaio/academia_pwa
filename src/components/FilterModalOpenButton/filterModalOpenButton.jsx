import React from 'react';
import { shape, string, array } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '@magento/venia-ui/lib/components/Button';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.module.css';
import { useFilterModal } from '@magento/peregrine/lib/talons/FilterModal';

const FilterModalOpenButton = props => {
    const { filters, classes: propsClasses } = props;
    const classes = useStyle(defaultClasses, propsClasses);
    const { handleOpen } = useFilterModal({ filters });

    return (
        <Button
            priority={'low'}
            classes={{
                root_lowPriority: classes.filterButton
            }}
            data-cy="FilterModalOpenButton-button"
            onClick={handleOpen}
            type="button"
            aria-live="polite"
            aria-busy="false"
        >
            Filtros
        </Button>
    );
};

export default FilterModalOpenButton;

FilterModalOpenButton.propTypes = {
    classes: shape({
        filterButton: string
    }),
    filters: array
};
