import React from 'react';
import { gql } from '@apollo/client';
import { bool, func, shape, string } from 'prop-types';
import { useAutocomplete } from '@magento/peregrine/lib/talons/SearchBar';

import defaultClasses from '@magento/venia-ui/lib/components/SearchBar/autocomplete.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Suggestions from '@magento/venia-ui/lib/components/SearchBar/suggestions';

const GET_AUTOCOMPLETE_RESULTS = gql`
    query getAutocompleteResults($inputText: String!) {
        # Limit results to first three.
        products(search: $inputText, currentPage: 1, pageSize: 3) {
            aggregations {
                label
                count
                attribute_code
                options {
                    label
                    value
                }
                position
            }
            # eslint-disable-next-line @graphql-eslint/require-id-when-available
            items {
                id
                uid
                sku
                name
                small_image {
                    url
                }
                url_key
                url_suffix
                price {
                    regularPrice {
                        amount {
                            value
                            currency
                        }
                    }
                }
                price_range {
                    maximum_price {
                        final_price {
                            currency
                            value
                        }
                        discount {
                            amount_off
                        }
                    }
                }
            }
            page_info {
                total_pages
            }
            total_count
        }
    }
`;

const Autocomplete = props => {
    const { setVisible, valid, visible } = props;
    const talonProps = useAutocomplete({
        queries: {
            getAutocompleteResults: GET_AUTOCOMPLETE_RESULTS
        },
        valid,
        visible
    });
    const {
        displayResult,
        filters,
        messageType,
        products,
        resultCount,
        value
    } = talonProps;

    const classes = useStyle(defaultClasses, props.classes);
    const rootClassName = visible ? classes.root_visible : classes.root_hidden;

    const MESSAGES = new Map()
        .set('ERROR', 'Ocorreu um erro ao buscar produtos.')
        .set('LOADING', 'Buscando...')
        .set('PROMPT', 'Pesquisar um produto')
        .set('EMPTY_RESULT', 'Nenhum produto encontrado')
        .set('RESULT_SUMMARY', (_, resultCount) => `${resultCount} itens`)
        .set('INVALID_CHARACTER_LENGTH', 'Digite no mínimo três caractéres');

    const messageTpl = MESSAGES.get(messageType);
    const message =
        typeof messageTpl === 'function'
            ? messageTpl`${resultCount}`
            : messageTpl;

    return (
        <div data-cy="Autocomplete-root" className={rootClassName}>
            <label
                id="search_query"
                data-cy="Autocomplete-message"
                className={classes.message}
            >
                {message}
            </label>
            <div className={classes.suggestions}>
                <Suggestions
                    displayResult={displayResult}
                    products={products || {}}
                    filters={filters}
                    searchValue={value}
                    setVisible={setVisible}
                    visible={visible}
                />
            </div>
        </div>
    );
};

export default Autocomplete;

Autocomplete.propTypes = {
    classes: shape({
        message: string,
        root_hidden: string,
        root_visible: string,
        suggestions: string
    }),
    setVisible: func,
    visible: bool
};
