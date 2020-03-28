import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";

export default class Ensci extends Component {
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
                <h1>Ensci</h1>
                <p className="smaller"> <i>Master CTC 2018 - 2019</i></p>
                <p>

                </p>
                <p className="d-flex center" style={{marginLeft : '20ch'}} >



                </p>


                <p>
                    <ul className="nostyle">
                        Outil de références
                    </ul>
                </p>
            </div>
        );
    }
}
