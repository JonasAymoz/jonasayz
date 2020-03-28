import React, { Component } from "react";
import { Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Projects from "./projects_v2";
import Project from "./project";
import Missed from "./missed";
import posts from '../posts/posts';
import nows from '../posts/nows';
import Now from "./now";
import Apropos from "./apropos";
import Soundland from "../projects/Soundland";
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Ensci from "../projects/ensci/Ensci";
import Contact from "./contact";
import Lab from "./lab";

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
                                <Route
                                    exact
                                    path="/contact"
                                    render={props => (
                                        <Contact {...props} />
                                    )}
                                />
                                <Route
                                    path="/lab"
                                    render={props => (
                                        <Lab {...props} />
                                    )}
                                />
								<Route
									path="/lab/:idProject"
									render={props => (
										<LabItem {...props} />
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
                                <Route
                                    path="/projects/grabamerica"
                                    render={props => (
                                        <Project projectName="grabamericaPage" {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/flipfinder"
                                    render={props => (
                                        <Project projectName="flipfinder" {...props}  />
                                        //<FlipFinder {...props}  />
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
                                       // <Dramatic {...props}  />
                                        <Project projectName="dramatic" {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/Gate"
                                    render={props => (
                                        <Project projectName="gate" {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/liho"
                                    render={props => (
                                        <Project projectName="liho" {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/nox"
                                    render={props => (
                                        <Project projectName="nox" {...props}  />
                                    )}
                                />
                                <Route
                                    path="/projects/ux"
                                    render={props => (
                                        <Project projectName="ux" {...props}  />
                                    )}
                                />
                                <Route
                                    path="/ensci"
                                    render={props => (
                                        <Ensci {...props}  />
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
