import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import {Image} from "animated";

export default class ProjectItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
            selectedProject: {},
			animate: new Animated.Value(0)
		};
	}
	componentDidMount() {
		if (this.props.projects.length) {
			this._renderProject(this.props.projects);
		}


	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			this._renderProject(nextProps.projects);
		}
	}
	_renderProject(projects) {
		let project = projects.filter(p => {
			return (p.id == this.props.match.params.idProject);
		});
		if (project.length) {
			this.setState({ selectedProject: project[0] });
			setTimeout(
				() => {
          Animated.spring(this.state.animate, {toValue: 1}).start()
        },
				275
			);
		}
	}
	render() {
		const { selectedProject: { title, body, date, images } } = this.state;
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["-24px", "0px"]
			})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`
		};
		const rotate = {
			left: Animated.template`${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ['-210px', '10px']
				})
			}`,

		};

		return (
			<div className="page project-item">
				<Animated.span style={goBackStyle} className="goBack">
					<a
						onClick={e => {
							e.preventDefault();
							this.props.history.goBack();
						}}
					>
						←
					</a>
				</Animated.span>
				<Animated.span
					style={rotate}
					className="square">
					<span className="square"></span>
				</Animated.span>
				<h1>{title && title}</h1>
				<p className="smaller"> <i>{date}</i></p>
				<p>{body && body}</p>
			</div>
		);
	}
}
