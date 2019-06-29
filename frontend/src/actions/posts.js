import {
    getPost,
    getPosts,
    getPostsByCategory,
    createPost,
    updatePost,
    deletePost,
    votePost
} from '../api/api'
import { generateId } from '../api/helpers'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

function receivePostsAction (posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

function receivePostAction (post) {
    return {
        type: RECEIVE_POST,
        post
    }
}

export function handleReceivePosts (category) {
    return (dispatch) => {
        (category === undefined || category === ''
            ? getPosts()
            : getPostsByCategory(category)
        ).then((posts) => {
            dispatch(receivePostsAction(posts))
        })
    }
}

export function handleReceivePost (postId) {
    return (dispatch) => {
        getPost(postId)
            .then((p) => {
                dispatch(receivePostAction(p))
            })
    }
}

export const ADD_POST = 'ADD_POST'

function addPostAction (post) {
    return {
        type: ADD_POST,
        post
    }
}

export function handleAddPost (post) {
    const {
        author, title, body, category
    } = post
    return (dispatch) => {
        createPost({
            id: generateId(),
            timestamp: new Date().getTime(),
            title,
            body,
            author,
            category
        })
        .then((p) => {
            dispatch(addPostAction(p))
        })
    }
}

export const UPDATE_POST = 'UPDATE_POST'

function updatePostAction (post) {
    return {
        type: UPDATE_POST,
        post
    }
}

export function handleUpdatePost (post) {
    const {
        id, title, body, category
    } = post
    return (dispatch) => {
        updatePost({
            id,
            title,
            body,
            category
        })
        .then((p) => {
            dispatch(updatePostAction(p))
        })
    }
}

export const DELETE_POST = 'DELETE_POST'

function deletePostAction (postId) {
    return {
        type: DELETE_POST,
        postId
    }
}

export function handleDeletePost (postId) {
    return (dispatch) => {
        deletePost(postId).then(() => {
            dispatch(deletePostAction(postId))
        })
    }
}

export const VOTE = { UP: 'upVote', DOWN: 'downVote' }

export function handleVotePost (postId, option) {
    console.log('json: ', JSON.stringify(option))
    return (dispatch) => {
        votePost(postId, option).then((p) => {
            dispatch(updatePostAction(p))
        })
    }
}