import {
    getComment,
    getComments,
    createComment,
    updateComment,
    deleteComment,
    voteComment
} from '../api/api'
import { generateId } from '../api/helpers'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

function getCommentsAction (comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

function getCommentAction (comment) {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export function handleGetComments (postId) {
    return (dispatch) => {
        getComments(postId)
            .then((c) => {
                dispatch(getCommentsAction(c))
            })
    }
}

export function handleGetComment (commentId) {
    return (dispatch) => {
        getComment(commentId)
            .then((c) => {
                dispatch(getCommentAction(c))
            })
    }
}

export const ADD_COMMENT = 'ADD_COMMENT'

function addCommentAction (comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment (comment) {
    const {
        body, author, parentId
    } = comment
    return (dispatch) => {
        createComment({
            id: generateId(),
            timestamp: new Date().getTime(),
            body,
            author,
            parentId
        })
        .then((c) => {
            dispatch(addCommentAction(c))
        })
    }
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT'

function updateCommentAction (comment) {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}

export function handleUpdateComment (comment) {
    const { id, body } = comment
    return (dispatch) => {
        updateComment({
            id,
            timestamp: new Date().getTime(),
            body
        })
        .then((c) => {
            dispatch(updateCommentAction(c))
        })
    }
}

export const DELETE_COMMENT = 'DELETE_COMMENT'

function deleteCommentAction (commentId) {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export function handleDeleteComment (commentId) {
    return (dispatch) => {
        deleteComment(commentId)
            .then((c) => {
                dispatch(deleteCommentAction(c.id))
            })
    }
}

export const VOTE = { UP: 'upVote', DOWN: 'downVote' }

export function handleVoteComment (commentId, option) {
    return (dispatch) => {
        voteComment(commentId, option)
            .then((c) => dispatch(updateCommentAction(c)))
    }
}