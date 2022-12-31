import { gql } from '@apollo/client';

export const GET_CATEGORIES_BY_ID = gql`
    query getCategoriesById($ids: [String]) {
        categoryList(filters: { ids: { in: $ids } }) {
            uid
            name
            description
            url_key
            image
        }
    }
`;
