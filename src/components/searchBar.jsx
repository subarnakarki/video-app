import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };
    handleChange = (e) => {
        this.setState({term : e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() { 
        return ( 
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Video Search</label>
                        <input onChange={this.handleChange} value={this.state.term} type="text" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;