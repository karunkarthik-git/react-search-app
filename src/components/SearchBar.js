import React from 'react';

class SearchBar extends React.Component{
    //Step 1 : Create a state variable
    state = {term:''};

    // Use arrow function for automatic binding !
    onFormSubmit = (event) => {
        // Prevents submission
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                {/* To fix null problem issues -> below is a way to do it */}
                {/* <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}></form> */}
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/* Step 2: Update the variable to value */}
                        {/* Step 3: Use onChange ans setState({key:value}) */}
                        <input type='text' value={this.state.term} onChange={(event)=> this.setState({term:event.target.value})} placeholder='Enter the text'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;