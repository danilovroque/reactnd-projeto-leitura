import { combineReducers } from 'redux'
import posts from './posts'
import categories from './categories'
import comments from './comments'
import preferences from './preferences'

export default combineReducers({
    preferences,
    posts,
    categories,
    comments
})