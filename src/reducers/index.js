import { combineReducers } from 'redux'
import posts from './posts'
import currentSortBy from './sortBy'
import visinbilityFilter from './visibilityFilter'

export default combineReducers({
    posts,
    currentSortBy,
    visinbilityFilter
})