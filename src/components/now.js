import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

export default class Now extends Component {
	constructor(props) {
		super(props);
		this.state = {
			now: {},
			animate: new Animated.Value(0)
		};
	}
	componentDidMount() {
		if (this.props.nows.length) {
			this._renderProject(this.props.nows);
		}
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.nows.length && nextProps.nows.length) {
			this._renderProject(nextProps.nows);
		}
	}
	_renderProject(projects) {
		let activeNow = projects.filter(p => {
			return (p.active === 1);
		});
		if (activeNow.length) {
			this.setState({ now: activeNow[0] });
			setTimeout(
				() => {
          Animated.spring(this.state.animate, {toValue: 1}).start()
        },
				275
			);
		}
	}
	render() {
		const { now: { date, book, techno, color, music } } = this.state;
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
				<h1>Now</h1>
				<p>
					<div> Date : {date} <br/></div>
					<div>Techno : {techno}</div>
					<div>Book : {book}</div>
					<div>Music : {music}</div>
				</p>

				See older now ⟹
			</div>
		);
	}
}
