import React, { Component } from 'react'
import './Foaas.css'

class Foaas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: "",
            showResult: false
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            person : e.target.value,
            showResult: false
        })
    }
    
    fooaction = () => {
        this.setState({
            showResult: true
        })
        document.getElementById("f-name").value = "";
    }
    render() { 
        let sentence = `Fuck you, ${this.state.person}!`
        // console.log(sentence)
        return (
            <div className='foaas'>
                <h2>You know that, you need it! <br /> Say the name of the person you want to f*off</h2>
                <div className="inputArea">
                    <label for="f-name">Write here</label>
                    <input type="text" name="f-name" id="f-name" placeholder="Rosy" onChange={this.handleChange}/>
                    <button onClick={this.fooaction}>F*U</button>
                </div>
                <h1>
                    {this.state.showResult && sentence}
                </h1>
            </div>
          );
    }
}
 
export default Foaas;