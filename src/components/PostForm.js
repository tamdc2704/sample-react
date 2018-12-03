import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: props.post,
            redirect: null
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
        let { isNew, addPost, updatePost, close } = this.props
        let { post } = this.state
        let posts = JSON.parse(localStorage.getItem('posts'))
        

        if(isNew) {  
            posts.push(post)
            localStorage.setItem('posts', JSON.stringify(posts))
            addPost(post)
            this.setState({redirect: true}, () => close())
        } else {
            posts = posts.map(p => p.id === post.id ? post : p )
            localStorage.setItem('posts', JSON.stringify(posts))
            updatePost(post)
            this.setState({redirect: true}, () => close())
        }
    }

    render() {
        const { isNew, close } = this.props
        let { title, description, mediaType, links, href } = this.state.post
        links = mediaType == 'image' ? links : [{href: 'No link for this media type'}]

        if(this.state.redirect) {
            return <Redirect to='/'/>;
        }

        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={close}>&times;</span>
                    <h3>Add to collection</h3>
                    <div>
                        <label>Title</label>
                        <input type="text" value={title} onChange={this.handleChange} name="title"/>
                    </div>
            
                    <div>
                        <label>Description</label>
                        <textarea value={description} onChange={this.handleChange} name="description"/>
                    </div>
            
                    <div>
                        <label>Type</label>
                        <select name="mediaType" value={mediaType || 'image'} onChange={this.handleChange}>
                            <option value="audio">Audio</option>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
            
                    <div>
                        <label>Link preview image</label>
                        <input type="text" value={links[0].href} onChange={this.handleChange} name="links"/>
                    </div>
            
                    <div>
                        <label>Link file url</label>
                        <input type="text" value={href} onChange={this.handleChange} name="href"/>
                    </div>
                    {
                        isNew && <button onClick={this.handleSave} className="button">Add to collection</button>
                    }
                    {
                        !isNew && <button onClick={this.handleSave} className="button">Save</button>
                    }
                </div>
            </div>
        )
    }
}

export default PostForm