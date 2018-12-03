import {CurrentSortBy} from '../actions'

const currentSortBy = (state = CurrentSortBy.NONE, {type, payload}) => {
    switch(type) {
        case 'SORT_BY':
            return payload.sortBy
        default:
            return state
    }
}

export default currentSortBy