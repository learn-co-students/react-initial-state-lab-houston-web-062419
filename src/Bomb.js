import React from 'react';

export default class Bomb extends React.Component {

constructor(props) {
	    super(props)
	 	this.state = {
	 		secondsLeft: props.initialCount
	 	}
	}

	render(props){
		if (this.state.secondsLeft == 0)
			return(<div>Boom!</div>) 
		else
			return(<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
	}
} 

