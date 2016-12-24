import React from "react";
import { Link } from "react-router";

export default class Title extends React.Component{
	
	render() {
		return (

			<div>
				<h1>Discover React</h1>
				{this.props.children}
				<Link to= "archives" class="btn btn-danger">archives</Link>
				<Link to= "settings"class="btn btn-success">settings</Link>

			</div>
			);
	}
}