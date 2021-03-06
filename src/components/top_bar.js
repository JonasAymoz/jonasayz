import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/apropos">A propos</NavLink>
                    <NavLink to="/lab">Lab</NavLink>
					<NavLink to="/now">Now</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

				</nav>
			</div>
		)
	}
}