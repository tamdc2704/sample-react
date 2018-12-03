import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters, { type, payload }) => {
    switch(type) {
        case 'FILTER_POST':
            return visibilityFilter[payload.filter] = !visibilityFilter[payload.filter]
        default: 
            return state
    }
}

export default visibilityFilter