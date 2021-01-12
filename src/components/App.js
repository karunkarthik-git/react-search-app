import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import ImageList from './ImageList';
import SearchBar from './SearchBar'


class App extends Component {
    
    state = {images: []};


    onSearchSubmit = async (term)=>{
        // Promise syntax is below
        // axios.get('https://api.unsplash.com/search/photos',{
        //     params:{ query: term},
        //     headers: {
        //         Authorization: 'Client-ID BUbyqoj-bmWpAkfrvqhyWPnOHNPwrj2ztf7tY_pEvnI' 
        //     }
        // }).then((response)=>{
        //     console.log(response.data.results);
        // })

        // Async Await syntax is below - await only possible when function has asyn keyword before it
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{
            params:{ query: term},
        });
        this.setState({images:response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                {/* onSubmit is a prop */}
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;