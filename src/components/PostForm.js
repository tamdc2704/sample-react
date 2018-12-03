import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: props.post
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleChange(e) {
        const { post } = Object.assign(this.state)
        post[e.target.name] = e.target.value

        this.setState({post})
    }

    handleSave() {
        let { isNew, addPost, updatePost } = this.props
        let { post } = this.state
        let posts = JSON.parse(localStorage.getItem('posts'))
        

        if(isNew) {  
            posts.push(post)
            localStorage.setItem('posts', JSON.stringify(posts))
            addPost(post)
        } else {
            posts = posts.map(p => p.id === post.id ? post : p )
            
            localStorage.setItem('posts', JSON.stringify(posts))
            updatePost(post)
        }
    }

    render() {
        const { addPost, updatePost, isNew } = this.props
        let { title, description, mediaType, links, href } = this.state.post
        links = mediaType == 'image' ? links : [{href: 'No link for this media type'}]
        
        return (
            <div>
                <h3>Add to collection</h3>
                <div>
                    <input value={title} onChange={this.handleChange} name="title"/>
                    <span className="floating-label">Title</span>
                </div>
        
                <div>
                    <input value={description} onChange={this.handleChange} name="description"/>
                    <span className="floating-label">Description</span>
                </div>
        
                <div>
                    <input value={mediaType} onChange={this.handleChange} name="mediaType"/>
                    <span className="floating-label">Type</span>
                </div>
        
                <div>
                    <input value={links[0].href} onChange={this.handleChange} name="links"/>
                    <span className="floating-label">Link preview image</span>
                </div>
        
                <div>
                    <input value={href} onChange={this.handleChange} name="href"/>
                    <span className="floating-label">link file url</span>
                </div>
                {
                    isNew && <button onClick={this.handleSave}>Add to collection</button>
                }
                {
                    !isNew && <button onClick={this.handleSave}>Save</button>
                }
            </div>
        )
    }
}

export default PostForm