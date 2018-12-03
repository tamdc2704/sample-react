import {connect} from 'react-redux'
import PostList from '../components/PostList'
import { deletePost, toggleFavorite } from '../actions';


const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    toggleFavorite: id => {
        let posts = JSON.parse(localStorage.getItem('posts'))
        posts = posts.map(post => post.id === id ? {...post, favorite: !post.favorite} : post)
        localStorage.setItem('posts', JSON.stringify(posts))

        dispatch(toggleFavorite(id))
    },
    deletePost: id => {
        let posts = JSON.parse(localStorage.getItem('posts'))
        posts = posts.filter(post => post.id !== id)
        localStorage.setItem('posts', JSON.stringify(posts))

        dispatch(deletePost(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)