import {connect} from 'react-redux'
import PostForm from '../components/PostForm';
import {addPost, updatePost} from '../actions/index'

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPost(post)),
    updatePost: post => dispatch(updatePost(post))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm)