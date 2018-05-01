import React, { Component } from 'react';
import '../styleModules/SearchPanel.css';
import SearchInput from './SearchInput';
import Button from './Button';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState, props) => {
            return {active: !prevState.active}
        });
        console.log('lakjf;kf')
    }

    render() {
        return (
            <div className = 'searchPanel-wrapper'>
                <span className = 'searchPanel-title'>Find your movie</span>
                <SearchInput />

                <span className = 'searchPanel-title'> Search by </span>
                <Button name = 'title' 
                        active = {this.state.active}
                        handleClick = {this.handleClick} 
                />
                <Button name = 'genre' 
                        active = {!this.state.active}
                        handleClick = {this.handleClick}
                />
                <Button name = 'search' active />
            </div>
        )
    }
}

export default SearchPanel;