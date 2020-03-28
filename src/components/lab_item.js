import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import {Image} from "animated";
import {Link} from "react-router-dom";

export default class LabItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0),
			display : false
		};
	}
	componentDidMount() {

	}
	componentWillReceiveProps(nextProps) {

	}
	_renderProject(projects) {

	}
	toggle = () => {
		console.log(this.props.p.id);
        this.props.selectLab(this.props.p.id)
		let current = this.state.display;
		this.setState({display : !current});
        setTimeout(
            () => {
                Animated.spring(this.state.animate, {toValue: 1}).start()
            },
            75
        );

	}
	render() {

        const {p, isOpen}  = this.props;
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["-24px", "0px"]
			})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`,
		};
		const rotate = {
			left: Animated.template`${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ['-250px', '10px']
				})
			}`,
            transform: Animated.template`
			rotateZ(${this.state.animate.interpolate({
                inputRange: [0, 1],
                outputRange: ["-24deg", "0deg"]
            })})`,
            backgroundImage: `url(${this.props.p.image})`

		};

		return (

				<div >
					<div className={'squareGriditem labGridItem ' + (this.state.display? '' : '')}
						 style={{backgroundImage: `url(${this.props.p.image})`}}
                         onClick={() =>this.toggle()} />

                    <div className={(isOpen? '' : 'hidden') + ' labCollapseItem'}>
                        <Animated.span

                            className="square lab" style={rotate}>

                        </Animated.span>
						<div className="labTitleContainer">
                            <h3 className="title"> {this.props.p.title}</h3>
                            <Animated.div style={goBackStyle} className="goBack" onClick={() =>this.toggle()}>
                                <a
                                    onClick={e => {
                                        e.preventDefault();
                                        this.toggle();
                                    }}
                                >
                                    ←
                                </a>
                            </Animated.div>
						</div>



                    </div>

				</div>

		);
	}
}
