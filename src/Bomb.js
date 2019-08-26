// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            secondsLeft: props.initialCount,
            // value: `${this.state.secondsLeft} seconds left before I go boom!`

        }
    }

    change = () => {
        this.setState({
            secondsLeft: setTimeout(function(){ 'Boom!' }, 120000),
            // value: "Boom!"
        })
    }



    render(){
        return(
            <div> 
                {this.state.secondsLeft == 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`} 
            </div>
        )
    }

}