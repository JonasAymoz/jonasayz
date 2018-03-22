import React, { Component } from "react";
import { Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Projects from "./projects";
import ProjectItem from "./project_item";
import Missed from "./missed";
import posts from '../posts/posts';
import nows from '../posts/nows';
import Now from "./now";
import Apropos from "./apropos";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: posts,
			nows : nows
		};
	}
	componentDidMount() {

	}

	render() {
		return (
			<div className="wrapper">
				<TopBar />
				<Route
					render={({ location }) => (
						<TransitionGroup component="main">
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route
									exact
									path="/projects"
									render={props => (
										<Projects {...props} projects={this.state.projects} />
									)}
								/>
								<Route
									path="/projects/:id"
									render={props => (
										<ProjectItem {...props} projects={this.state.projects} />
									)}
								/>
								<Route
									path="/now"
									render={props => (
										<Now {...props} nows={this.state.nows} />
                  )}
								/>
								<Route
									path="/apropos"
									render={props => (
										<Apropos {...props}  />
                  )}
								/>
								<Route component={Missed} />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}
