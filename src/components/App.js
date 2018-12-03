import React from 'react'
import VisiblePostList from '../containers/VisiblePostList'
import Search from './Search'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return(
            <div>
                <Route exact path="/" component={VisiblePostList} />
                <Route path="/search" component={Search} />
            </div>
        )
    }
}

export default App