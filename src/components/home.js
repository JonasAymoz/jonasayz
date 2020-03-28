import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import SvgMorph from "./svgMorph";
import * as Animated from "animated/lib/targets/react-dom";
import Link from "react-router-dom/es/Link";
import image from '../../public/1.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 , animate: new Animated.Value(0)};
  }
  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${ x }px`);
    e.target.style.setProperty('--y', `${ y }px`);
  }
	componentDidMount(){
    setTimeout(
      () => {
        Animated.spring(this.state.animate, {toValue: 1}).start()
      },
      275
    );
	}

  componentWillLeave () {
  	console.log('outa there');
    Animated.spring(this.state.animate, {toValue: 0}).start();
  }

  render() {
    const goBackStyle = {
      transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
        inputRange: [0, 1],
        outputRange: ["240px", "0px"]
      })},0,0)
			`,
      opacity: Animated.template`${this.state.animate}`
    };

    return (
			<div className="page home">
				<SvgMorph/>
				<div className="left">
					<h1 className="name">Hi, I'm Jonas <span className="gradientText"> Ayz</span></h1>
					<h1>I'm making web projects <span className="gradientText"> alive</span>  </h1>
					<p>
						Développeur Web // Web&More Designer //
					</p>
                    <img src='/1.jpg' alt="de"/>
                    <img src={image} alt="de"/>
				</div>
				<Animated.div style={goBackStyle} className="right hidden-xs" onMouseMove={this._onMouseMove.bind(this)}>
					<div className="centerFlex">
					<p>
						<p className="menuTitle"> <Link to="/apropos">A propos</Link></p>
						<p className="menuTitle"> <NavLink to="/projects">Projets</NavLink></p>
						<p className="menuTitle"> <Link to="/now">Now</Link></p>
						<p className="menuTitle"> <a href="mailto:jonas.aymoz@gmail.com?body=Bonjour Jonas," target="_blank">Contact</a></p>
					</p>
					</div>
				</Animated.div>

			</div>
		);
	}
}
