import React, { Component } from 'react'
class JokeField extends Component {
    state = { 
        joke: null
     }
    getjoke =() =>{
        // e.preventDefault();
        const externalUrl = `https://api.jokes.one/jod`
        fetch(externalUrl)
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {alert('Sorry, something went wrong') }
        })
        .then(responseJson => {
            this.setState({
                  joke: responseJson.contents.jokes[0].joke.text
            })
        })
        .catch(err => {
                console.log(`Something went wrong: ${err.message}`);
        });
    }

    render() { 
        return ( 
            <div>
                <h2>See the light in despair... get one joke a day!</h2>
                <button
                    onClick={this.getjoke}>
                    click me 
                </button>
                <div>
                    <h2>{this.state.joke}</h2>
                </div>
            </div>
         );
    }
}
 
export default JokeField;