import React from 'react'
import propTypes from 'prop-types'
import {Link, Route} from 'react-router-dom'

import Post from './Post'
import ModifiedPost from '../containers/ModifiedPost';

class PostList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            isEnableForm: false
        }

        this.enableForm = this.enableForm.bind(this)
        this.closeForm= this.closeForm.bind(this)
    }

    enableForm(post) {
        this.setState({
            currentPost: post,
            isEnableForm: true
        })
    }

    closeForm() {
        this.setState({isEnableForm: false})
    }

    render() {
        const { posts, toggleFavorite, deletePost } = this.props
        const { currentPost, isEnableForm } = this.state
        
        return (
            <div className="collection-container">
                <div className="action-list">
                    <Link to='/search' className="button">Add new item</Link>
                </div>
                
                <div className="collection-posts">
                    {
                        isEnableForm &&
                        <ModifiedPost isNew={false} post={currentPost} close={this.closeForm}/>
                    }
                    {
                        posts.map(post => (
                            <Post
                                key={post.id}
                                {...post}
                                isInCollection
                                enableEdit={() => this.enableForm(post)}
                                toggleFavorite= { () => toggleFavorite(post.id) }
                                deletePost={ () => deletePost(post.id) }
                            />
                        ))
                    }
                </div>
            </div>
            
        )
    }
}

export default PostList