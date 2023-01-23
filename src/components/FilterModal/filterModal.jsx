import React, { useMemo } from 'react';
import { FocusScope } from 'react-aria';
import { array, arrayOf, shape, string } from 'prop-types';
import { X as CloseIcon } from 'react-feather';
import { useFilterModal } from '@magento/peregrine/lib/talons/FilterModal';

import { useStyle } from '@magento/venia-ui/lib/classify';
import Icon from '@magento/venia-ui/lib/components/Icon';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import { Portal } from '@magento/venia-ui/lib/components/Portal';
import CurrentFilters from '@magento/venia-ui/lib/components/FilterModal/CurrentFilters';
import FilterBlock from '@magento/venia-ui/lib/components/FilterModal/filterBlock';
import FilterFooter from '@magento/venia-ui/lib/components/FilterModal/filterFooter';
import defaultClasses from '@magento/venia-ui/lib/components/FilterModal/filterModal.module.css';

/**
 * A view that displays applicable and applied filters.
 *
 * @param {Object} props.filters - filters to display
 */
const FilterModal = props => {
    const { filters } = props;
    const talonProps = useFilterModal({ filters });
    const {
        filterApi,
        filterItems,
        filterNames,
        filterFrontendInput,
        filterState,
        handleApply,
        handleClose,
        handleReset,
        handleKeyDownActions,
        isOpen
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const modalClass = isOpen ? classes.root_open : classes.root;

    const filtersList = useMemo(
        () =>
            Array.from(filterItems, ([group, items]) => {
                const blockState = filterState.get(group);
                const groupName = filterNames.get(group);
                const frontendInput = filterFrontendInput.get(group);
                return (
                    <FilterBlock
                        key={group}
                        filterApi={filterApi}
                        filterState={blockState}
                        filterFrontendInput={frontendInput}
                        group={group}
                        items={items}
                        name={groupName}
                    />
                );
            }),
        [filterApi, filterItems, filterNames, filterState, filterFrontendInput]
    );

    const filtersAriaLabel = 'Filtros';

    const closeAriaLabel = 'Fechar popup dos filtros';

    const clearAllAriaLabel = 'Fechar todos os filtros aplicados';

    const clearAll = filterState.size ? (
        <div className={classes.action}>
            <LinkButton
                type="button"
                onClick={handleReset}
                ariaLabel={clearAllAriaLabel}
                data-cy="FilterModal-clearButton"
            >
                Limpar
            </LinkButton>
        </div>
    ) : null;

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <FocusScope contain restoreFocus autoFocus>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <aside
                    className={modalClass}
                    onKeyDown={handleKeyDownActions}
                    data-cy="FilterModal-root"
                >
                    <div className={classes.body}>
                        <div className={classes.header}>
                            <h2 className={classes.headerTitle}>Filtros</h2>
                            <button
                                onClick={handleClose}
                                aria-disabled={false}
                                aria-label={closeAriaLabel}
                            >
                                <Icon src={CloseIcon} />
                            </button>
                        </div>
                        <CurrentFilters
                            filterApi={filterApi}
                            filterNames={filterNames}
                            filterState={filterState}
                        />
                        {clearAll}
                        <ul
                            className={classes.blocks}
                            aria-label={filtersAriaLabel}
                        >
                            {filtersList}
                        </ul>
                    </div>
                    <FilterFooter
                        applyFilters={handleApply}
                        hasFilters={!!filterState.size}
                        isOpen={isOpen}
                    />
                </aside>
            </FocusScope>
        </Portal>
    );
};

FilterModal.propTypes = {
    classes: shape({
        action: string,
        blocks: string,
        body: string,
        header: string,
        headerTitle: string,
        root: string,
        root_open: string
    }),
    filters: arrayOf(
        shape({
            attribute_code: string,
            items: array
        })
    )
};

export default FilterModal;
