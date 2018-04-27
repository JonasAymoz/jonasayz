import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import gifFlip from '../images/gifFlip.gif';

export default class FlipFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: {},
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
                <h1>Flip Finder</h1>
                <p className="smaller"> <i>2018</i></p>
                <h6>L'Application web pour rechercher un flipper !</h6>
                <p>FlipFinder est un petit projet mené afin de faciliter la vie de tous les fan de flipper !</p>
                <p>Lorsque l'on cherche à jouer et taper une bille, on ne sait pas toujours où chercher, et le but de flipFinder est
                    de pouvoir trouver facilement un flipper à proximité. Le site se veut collaboratif et tout le monde peut ajouter son flipper du coin.</p>
                <p>Alors plus d'excuses pour aller prendre une pause !</p>


                <div><img src={gifFlip} alt=""/></div>
                <h6> Link :
                    <a href="https://flipfinder.fr"> flipfinder.fr </a></h6>


                <p>
                <ul className="nostyle">Flipfinder utilise entre autres : <br/>
                    React JS
                    // Java Plume framework
                    // Mysql
                    // Mapbox // Sassy styles
                </ul>
                </p>

            </div>
        );
    }
}
