import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import affiche from "../images/affiche_dramatic.jpg";

import logo from '../images/logo-small.jpg';

export default class Dramatic extends Component {
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
                <h1>Dramatic Amérique</h1>
                <p className="smaller"> <i>2014 - 1h15 - Réalisé par Timothé Euvrard</i></p>
                <p>Dramatic Amérique est un docu-fiction qui retrace la vie de reporter un peu perdu dans l'immensité Américaine, à la recherche du secret de l'Amérique, de son essence.
                    En traversant le pays, ils s'aventurent dans sa culture, se perdent et se découvrent au fil des kilomètres.
                </p>
                <p className="d-flex center" style={{marginLeft : '20ch'}} >
                    <img src={affiche} height="500"/>


                </p>
                <p>
                    Disponible online !

                </p>


                <p>
                    <ul className="nostyle">Dramatic Amérique a nécessité : <br/>
                        Captation vidéo // Montage // Charte Graphique // des burgers //
                    </ul>
                </p>
            </div>
        );
    }
}
