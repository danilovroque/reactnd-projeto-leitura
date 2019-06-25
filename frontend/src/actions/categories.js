import { getCategories } from '../api/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

function getCategoriesAction (categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function handleReceiveCategories() {
    return (dispatch) => {
        getCategories()
            .then((categories) => {
                dispatch(getCategoriesAction(categories))
            })
    }
}