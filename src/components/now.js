import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

export default class Now extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nows: this.props.nows.filter(p => {return p.active === 0}),
			activeNow : {},
			animate: new Animated.Value(0)
		};
	}
    componentDidMount() {
		if (this.props.nows.length) {
			this._renderNows(this.props.nows);
		}
	}

	_renderNows(nows) {
		let activeNow = nows.filter(p => {
			return (p.active === 1);
		});
		if (activeNow.length) {
			this.setState({ activeNow: activeNow[0] });
			setTimeout(
				() => {
          Animated.spring(this.state.animate, {toValue: 1}).start()
        },
				275
			);
		}
	}
	render() {
		const { date, book, techno, music  } = this.state.activeNow;
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

                <div className="now">

					<p>
						<div><i><small>-{this.state.activeNow.date}-</small></i><br/></div>
						<div>Techno : {this.state.activeNow.techno}</div>
						<div>Book : {this.state.activeNow.book}</div>
						<div>Music : {this.state.activeNow.music}</div>
                        <div>Color : <span style={{'background' : this.state.activeNow.color, 'color' : 'white'}}> {this.state.activeNow.color}</span> </div>
					</p>
				</div>

                <hr/>
				<div className="oldNow">

                    {this.state.nows.map((p, i) => {
                        return (
                            <div className="now">
								<p>
									<div><i>-{p.date}- </i><br/></div>
									<div>Techno : {p.techno}</div>
									<div>Book : {p.book}</div>
									<div>Music : {p.music}</div>
									<div>Color : <span style={{'background' : p.color, 'color' : 'white'}}> {p.color}</span> </div>
								</p>
							</div>
                        );
                    })}

				</div>
			</div>
		);
	}
}
