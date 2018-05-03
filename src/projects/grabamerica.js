import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

import logo from '../images/logo-small.jpg';

export default class Grabamerica extends Component {
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
                <h1>Grabamerica</h1>
                <p className="smaller"> <i>2012-2017</i></p>
                <p className="smaller"> <i>Réalisé avec Camille Chrétien - Financé par crowdfunding !</i></p>
                <p>Grabamerica est un projet de webdocumentaire, un documentaire interactif, qui propose de découvrir et d'arpenter la jeunesse sud-Américaine par la rencontre et le voyage.</p>

                <p className="d-flex" style={{marginLeft : '28ch'}} >
                    <img src={logo} height="140"/>
                </p>
                <h3 className="thin"><i>  "Grabar : enregistrer, filmer" </i>  </h3>
                <p>Initié en 2012, le projet vise à sensibiliser aux cultures sud-américaine, et à leur richesses ! Il est né du constat commun qu'il existait une forte différence de mentalité,
                    de vision, et d'approche de la vie quotidienne, de la part des personne que nous avions rencontrés respectivement en Argentine et au Mexique. Afin d'en savoir plus et d'essayer de capture ce sentiment,
                nous sommes repartis 6 mois en Amérique du Sud pour tourner ce web-documentaire et rencontrer des habitants, militants, agriculteurs ou encore étudiants sur notre route.</p>

                <iframe src="https://player.vimeo.com/video/66174482" width="640" height="360" frameBorder="0" allowFullScreen></iframe>

                <h6> Link :
                    <a href="http://grabamerica.fr"> grabamerica.fr </a></h6>
                <p>
                    <ul className="nostyle">Grabamerica c'est : <br/>
                        Klynt Api
                        // React JS // Sassy styles
                        // Du café // 500go de rushs
                    </ul>
                </p>
            </div>
        );
    }
}
