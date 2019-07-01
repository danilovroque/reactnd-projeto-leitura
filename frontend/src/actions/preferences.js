import { ORDER_BY, savePreference, getPreference } from '../api/preferences'

export const SAVE_ORDER_POSTS = 'SAVE_ORDER_POSTS'

function savePreferenceOrderPosts (orderBy) {
    return {
        type: SAVE_ORDER_POSTS,
        orderBy
    }
}

export function handleSavePreferenceOrderPosts (orderBy) {
    return (dispatch) => {
        savePreference(ORDER_BY, orderBy)
        dispatch(savePreferenceOrderPosts(orderBy))
    }
}

export const GET_ORDER_POSTS = 'GET_ORDER_POSTS'

function getPreferenceOrderPosts () {
    return {
        type: GET_ORDER_POSTS
    }
}

export function handleGetPreferenceOrderPosts () {
    return (dispatch) => {
        const pref = getPreference(ORDER_BY, 'Date')
        dispatch(getPreferenceOrderPosts(pref))

    }
}