import { ORDER_BY, savePreference, getPreference } from '../api/preferences'

export const SAVE_ORDER_POSTS = 'SAVE_ORDER_POSTS'

function savePreferenceOrderPosts (orderBy) {
    return {
        type: ORDER_BY,
        orderBy
    }
}

export function handleSavePreferenceOrderPosts (orderBy) {
    return (dispatch) => {
        savePreference(orderBy)
        dispatch(savePreferenceOrderPosts(orderBy))
    }
}

export const GET_ORDER_POSTS = 'GET_ORDER_POSTS'

function getPreferenceOrderPosts (pref) {
    return {
        type: GET_ORDER_POSTS,
        pref
    }
}

export function handleGetPreferenceOrderPosts () {
    return (dispatch) => {
        const pref = getPreference(ORDER_BY, 'Score')
        dispatch(getPreferenceOrderPosts(pref))

    }
}