import React from 'react';
import SearchBar from './searchBar.jsx'
import Youtube from '../apis/youtube.js'
import VideoList from './VideoList'
class App extends React.Component {
    state = {
        videos: []
    }
    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items
        })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>

        )
    }
}

export default App;