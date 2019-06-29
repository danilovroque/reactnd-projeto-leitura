import {
    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
    RECEIVE_COMMENT,
    RECEIVE_COMMENTS
} from '../actions/comments'

export default function comments (state = {}, action) {
    switch (action.type) {
        case ADD_COMMENT: {
            return [
                ...state,
                action.comment
            ]
        }
        case UPDATE_COMMENT: {
            return [
                ...state,
                action.comment
            ]
        }
        case DELETE_COMMENT: {
            return [
                ...state.filter((c) => c.id !== action.comment.id)
            ]
        }
        case RECEIVE_COMMENT: {
            return [
                action.comment ? [action.comment] : []
            ]
        }
        case RECEIVE_COMMENTS: {
            return action.comments
        }
        default:
            return state
    }
}