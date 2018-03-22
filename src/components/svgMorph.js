import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";

export default class SvgMorph extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
	}
	componentDidMount() {
    setTimeout(
      () => {
        Animated.spring(this.state.animate, {toValue: 1}).start()
      },
      275
    );
	}

	render() {

		return (
			<svg version="1.1" style={{ position: 'absolute', left: '100px', zIndex : '-11'}}  id="Layer_1"  x="0px" y="0px" width="515.604px" height="396.986px" viewBox="0 0 515.604 500" enableBackground="new 0 0 515.604 396.986">
				<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="67.3062" y1="222.5454" x2="454.5635" y2="222.5454">
					<stop  offset="0" style={{stopColor:'#FFFFFF'}}/>
					<stop  offset="1" style={{stopColor:'#9FACE6'}}/>
				</linearGradient>
				<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="33.104" y1="240.9097" x2="402.5459" y2="240.9097" gradientTransform="matrix(0.6763 0.7366 -0.7366 0.6763 214.3911 -109.3972)">
					<stop  offset="0" style={{stopColor:'#FFFFFF'}}/>
					<stop  offset="1" style={{stopColor:'#74EBD5'}}/>
				</linearGradient>


				<g opacity="0.4" id='svg1'>
					<path fill="url(#SVGID_2_)" d="M117.361,26.512C155.579,5.275,219.4,46.191,286.498,166.528
					c67.098,120.335-3.763,207.786-3.763,207.786s-33.601,35.048-114.39-20.935S77.751,286.96,63.328,249.665
					C42.957,196.991,45.182,127.77,62.822,90.582C62.822,90.582,94.193,39.387,117.361,26.512z"/>
				</g>

				<g opacity="0.3" id='svg2'>
					<path fill="url(#SVGID_1_)" d="M67.927,144.714c-6.275-43.269,34.021-80.412,168.041-48.454s203.093,128.866,203.093,128.866
						s54.639,95.876-41.237,117.525s-173.514,25.304-207.216,3.781c-33.919-21.661-74.227-79.038-89.691-117.183
						C100.917,229.25,71.183,167.166,67.927,144.714z">

						<animate dur='5s' repeatCount='indefinite' attributeName='d' values=''/>
					</path>
				</g>
			</svg>
		);
	}
}
