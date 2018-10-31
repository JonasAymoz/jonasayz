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
import Grabamerica from "../projects/grabamerica";
import FlipFinder from "../projects/flipfinder";
import Soundland from "../projects/Soundland";

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Dramatic from "../projects/dramatic";

fontawesome.library.add(brands);

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
{/*								<Route
									path="/projects/:idProject"
									render={props => (
										<ProjectItem {...props} projects={this.state.projects} />
									)}
								/>*/}
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
                                <Route
                                    path="/projects/grabamerica"
                                    render={props => (
                                        <Grabamerica {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/flipfinder"
                                    render={props => (
                                        <FlipFinder {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/Soundland"
                                    render={props => (
                                        <Soundland {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/DramaticAmerique"
                                    render={props => (
                                        <Dramatic {...props}  />
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
