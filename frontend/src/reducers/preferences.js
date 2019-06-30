import { GET_ORDER_POSTS, SAVE_ORDER_POSTS } from '../actions/preferences'

export default function preferences(state = {}, action) {
    switch(action.type) {
        case SAVE_ORDER_POSTS:
        case GET_ORDER_POSTS:
            return {
                orderby: action.orderBy
            }
        default:
            state
    }
}