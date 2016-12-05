import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
	constructor(){
		super();
		this.name = "Jonny"
		
	}
	render() {
		return (
			<h1> Here is {this.name}</h1>
			);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);

