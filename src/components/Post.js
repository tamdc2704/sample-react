import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Post = ({ toggleFavorite, enableEdit, deletePost, ...props }) => (
    <div className="grid-item">
        <div className="media">
            <MediaPreview {...props} />
        </div>
        <label className="type">{props.mediaType}</label>
        <label className="date">{moment(props.date).format('LL')}</label>
        <h3 className="title">{props.title}</h3>
        <p className="desc">{props.description}</p>
        {
            props.isInCollection &&
            <div  className="icon">
                <button className="button" onClick={()=> toggleFavorite(props.id)}>
                    <i className={props.favorite ? "fa fa-heart" : "fa fa-heart-o"}/>  
                </button>
                <button className="button" onClick={enableEdit}>
                    <i className="fa fa-pencil" />  
                </button>
                <button className="button" onClick={()=> deletePost(props.id)}>
                    <i className="fa fa-trash" />  
                </button>
            </div>
        }
        {
            !props.isInCollection && 
            <button onClick={props.enableForm}>Add to NASA collection</button>
        }
    </div>
)

class MediaPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linkSource: ''
        }
    }

    componentDidMount() {
        fetch(this.props.href)
        .then(response => response.json())
        .then(response => this.setState({linkSource: response[0]}))
    }

    render() {
        const {mediaType, links} = this.props
        let { linkSource } = this.state

        if(mediaType === 'image') {
            return <img src={links[0].href}/>
        } else if(mediaType === 'video') {
            return linkSource && 
            <video controls >
                <source src={linkSource}type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        } else {
            return linkSource &&
                <audio controls>
                    <source src={linkSource} type="audio/ogg" />
                    Your browser does not support the audio tag.
                </audio>
        }
    }
}

export default Post