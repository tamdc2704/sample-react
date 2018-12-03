import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post  from './Post'
import ModifiedPost from '../containers/ModifiedPost';
import { Link } from 'react-router-dom'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isEnableForm: false,
            currentPost: {}
        }
        this.myRef = React.createRef()
        this.enableForm = this.enableForm.bind(this)
        this.closeForm = this.closeForm.bind(this)
    }

    handleSearch(e) {
        if(e.key === 'Enter') {
            let query = this.myRef.current.value
            let searchAPI = 'https://images-api.nasa.gov/search?q='
            fetch(searchAPI + query)
                .then(response => response.json())
                .then(response => this.setState({posts: response.collection.items}))
        }
    }

    formatedPost(post) {
        return {
            id: post.data[0].nasa_id,
            mediaType: post.data[0].media_type,
            date: post.data[0].date_created,
            description: post.data[0].description,
            title: post.data[0].title,
            links: post.links,
            href: post.href,
            favorite: false
        }
    }

    enableForm(post) {
        this.setState({
            currentPost: this.formatedPost(post),
            isEnableForm: true
        })
    }

    closeForm() {
        this.setState({isEnableForm: false})
    }

    render() {
        const { posts, isEnableForm, currentPost } = this.state

        return(
            <div className="search-container">
                {
                    isEnableForm && <ModifiedPost post={currentPost} close={this.closeForm} isNew/>
                }
                <div className="search-action">
                    <Link to='/' className="button">Back to Collection</Link>
                </div>

                <div className="search-bar">
                    <h1>Search from Nasa</h1>
                    <input 
                        placeholder="Type something to search...(ex: moon, sun)"
                        onKeyPress={this.handleSearch.bind(this)}
                        ref={this.myRef}
                    />
                </div>
                
                <div className="search-posts">
                    {
                        posts.map( post => (
                            <Post 
                                key={post.data[0].nasa_id}
                                {...this.formatedPost(post)}
                                enableForm={() => this.enableForm(post)}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Search