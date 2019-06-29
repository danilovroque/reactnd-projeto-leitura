import {
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    RECEIVE_POST,
    RECEIVE_POSTS
} from '../actions/posts'

export default function posts (state = {}, action) {
    switch (action.type) {
        case ADD_POST: {
            return [
                ...state,
                action.post
            ]
        }
        case UPDATE_POST: {
            return [
                ...state.filter(p => p.id !== action.post.id),
                action.post
            ]
        }
        case DELETE_POST: {
            return [
                ...state.filter((p) => p.id !== action.post.id)
            ]
        }
        case RECEIVE_POST: {
            return action.post ? [action.post] : []
        }
        case RECEIVE_POSTS: {
            return action.posts
        }
        default:
            return state
    }
}