import React from 'react';
import SearchBar from './searchBar.jsx'
import Youtube from '../apis/youtube.js'

class App extends React.Component {
    state = {
        videos: []
    }
    onTermSubmit = async (term) => {
        console.log(process.env.REACT_APP_KEY)
        debugger
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
            </div>

        )
    }
}

export default App;