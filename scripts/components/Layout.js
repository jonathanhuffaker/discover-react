import React from "react";

class Layout extends React.Component{
	constructor(){
		super();
		this.name = "Jonny";
		
	}
	render() {
		return (
			<h1> Here is {this.name}</h1>
			);
	}
}