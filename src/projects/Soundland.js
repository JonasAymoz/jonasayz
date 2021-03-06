import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import logoSoundland from "../images/projets/soundland.jpg";
import graff from "../images/projets/soundlandGraff.jpg";

import logo from '../images/logo-small.jpg';

export default class Soundland extends Component {
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
                <h1>Soundland</h1>
                <p className="smaller"> <i>2014</i></p>
                <p>Soundland</p>

                <p className="d-flex" style={{marginLeft : '28ch'}} >
                </p>

                <p>
                    <img src={logoSoundland} alt="" style={{width : '60%' ,'margin': 'auto', 'display': 'block'}}/>
                    Soundland est un prototype d'installation sonore et interactive. <br/>
                    Il est constitué de panneaux au sol en aluminium qui conduisent l'electricité et activent des capteurs. Ceux ci sont reliés via une interface Arduino (le Makey makey!)
                    puis programmés pour déclencher des signaux midi. Enfin, un logiciel de synthèse sonore permet de moduler le son en fonction des déplacement de l'utilisateur.


                    <img src={graff} alt="" style={{width : '100%'}}/>
                </p>

                <p>
                    <ul className="nostyle">Soundland utilise : <br/>
                        Makey Makey // Arduino // Electronic stuffs // Ableton live + MAX // des pas de danse !
                    </ul>
                </p>
            </div>
        );
    }
}
