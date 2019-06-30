const api = 'http://localhost:3001'

let { token } = localStorage

if (!token) {
    token = localStorage.token = Math.random().toString(24).substr(-12)
}

const headers = {
    Authorization: token
}

//Categories
export const getCategories = () => fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .then((data) => data.categories)

//Posts
export const getPost = (postId) => fetch(`${api}/posts/${postId}`, { headers })
    .then((res) => (res.ok ? res.json() : undefined))

export const getPosts = () => fetch(`${api}/posts`, { headers })
    .then((res) => res.json())

export const getPostsByCategory = (category) => fetch(`${api}/${category}/posts`, { headers })
    .then((res) => res.json())

export const createPost = (post) => fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-type': 'application/json'
    },
    body: JSON.stringify(post)
}).then((res) => res.json())

export const updatePost = (post) => fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-type': 'application/json'
    },
    body: JSON.stringify(post)
}).then((res) => res.json())

export const deletePost = (postId) => fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers
}).then((res) => res.json())

export const votePost = (postId, option) => fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ option })
}).then((res) => res.json())

//Comments
export const getComments = (postId) => fetch(`${api}/posts/${postId}/comments`, { headers })
    .then((res) => res.json())

export const getComment = (commentId) => fetch(`${api}/comments/${commentId}`, { headers })
    .then((res) => res.json())

export const createComment = (comment) => fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-type': 'application/json'
    },
    body: JSON.stringify(comment)
}).then((res) => res.json())

export const updateComment = (comment) => fetch(`${api}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-type': 'application/json'
    },
    body: JSON.stringify(comment)
}).then((res) => res.json())

export const deleteComment = (commentId) => fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers
}).then((res) => res.json())

export const voteComment = (commentId, option) => fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-type': 'application/json'
    },
    body: JSON.stringify({ option })
}).then((res) => res.json())