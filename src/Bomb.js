// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

    state = {
        secondsLeft:this.props.initialCount
    }
    render() {
         let x = 'Boom!'
         let y = this.props.initialCount + " seconds left before I go boom!"
        return (
            <div>
               {this.state.secondsLeft > 0 ? y: x } 
            </div>
        )
    }
}

