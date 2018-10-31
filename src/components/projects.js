import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			animations: []
		};
	}
	componentDidMount() {
		this._renderProjects(this.props.projects);
	}
	componentWillReceiveProps(nextProps) {
		if (!this.props.projects.length && nextProps.projects.length) {
			this._renderProjects(nextProps.projects);
		}
	}
	_renderProjects(projects) {
        this.setState(
            {
                projects: projects,
                animations: projects.map((_, i) => new Animated.Value(0))
            },
            () => {
                Animated.stagger(
                    100,
                    this.state.animations.map(anim =>
                        Animated.spring(anim, { toValue: 1 })
                    )
                ).start();
            }
        );
	}
	render() {
		return (
			<div className="page projects">
				<h1><span className="gradientText">P</span>rojets</h1>
				<TransitionGroup component="ul">
					{this.state.projects.map((p, i) => {
						const style = {
							opacity: this.state.animations[i],
							transform: Animated.template`
								translate3d(0,${this.state.animations[i].interpolate({
								inputRange: [0, 1],
								outputRange: ["12px", "0px"]
							})},0)
							`
						};
						return (
							<li key={i} className={p.title}>
								<Animated.div style={style}>
									<Link to={`/projects${p.link}`} className='projectLink'>
										<span>{p.title}</span>
                                        <small>{p.desc}</small>
									</Link>

								</Animated.div>
							</li>
						);
					})}
				</TransitionGroup>
				<div>
					<h2><span className="gradientText">C</span>reative </h2>
					<h6>
						<a href="https://soundcloud.com/somefeed" alt="soundcloud"> Soundclound : musique & sons </a>
					</h6>
					<h6>
						<a href="https://vimeo.com/user3377935" alt="soundcloud"> Viméo : vidéo  </a>
					</h6>
                    <h6>
                        <a href="https://codepen.io/jonasAymoz/" alt="soundcloud"> Codepen : code fun ! </a>
                    </h6>
                    <h6>
                        <a href="https://www.flickr.com/photos/164167185@N07/" alt="soundcloud"> Photos : around the planet </a>
                    </h6>
				</div>
                <div>
                    <h2><span className="gradientText">M</span>aking  </h2>
					<h6>
						<a href="http://monstervan.tumblr.com/" alt="soundcloud"> Aménagement d'un vieux Van !</a>
					</h6>
					<h6>
						<a href="#" alt="soundcloud"> Luminaire via découpe laser </a>
					</h6>
					<h6>
						<a href="#" alt="soundcloud"> Objets en découpe laser</a>
					</h6>
                </div>
			</div>
		);
	}
}
