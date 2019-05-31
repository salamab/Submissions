import React, {Component} from 'react';

import './App.css';
import Test from './Component/Test';    

import youtube from './assets/youtube.png'
import searchIcon from  './assets/search.png'
import videoIcon from './assets/Artboard_11-512.png'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        console.log(searchIcon)
        return (
            <div className="App">
                <div className = "search-bar">
                    
                    <img src={youtube} alt="youtube logo"></img>
                    <input type="text" name="search" placeholder="React js conf" autoComplete="on"></input>
                    <button ><i class="fas fa-search"></i></button>
                    <img className ="Icon"  src={videoIcon} alt="videoIcon"></img>
                    
                </div>

                <div className = "main-video">
                <video />
                </div>

                <div>

                </div>
            </div>

        );
    }
}

export default App;
