
export const addPost = post => ({
    type: 'ADD_POST',
    payload: {
        post
    }
})

export const updatePost = (post) => ({
    type: 'UPDATE_POST',
    payload: {
        post
    }
})

export const deletePost = id => ({
    type: 'DELETE_POST',
    payload: {
        id
    }
})

export const toggleFavorite = id => ({
    type: 'TOGGLE_FAVORITE',
    payload: {
        id
    }
})

export const modifyFilter = filter => ({
    type: 'FILTER_POST',
    payload: {
        filter
    }
})

export const modifySort = sortBy => ({
    type: 'SORT_BY',
    payload: {
        sortBy
    }
})

export const VisibilityFilters = {
    audio: false,
    image: false,
    video: false,
    favorite: false,
    date: false
}

export const CurrentSortBy = {
    NONE: 'NONE',
    TITLE: 'TITLE',
    DATE: 'DATE'
}