import React from "react";
import * as Animated from "animated/lib/targets/react-dom";
import { Link } from "react-router-dom";

export default class ProjectCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {project, styleAnimated}  = this.props;
        return (
            <Animated.div style={styleAnimated} className='projectCard'>
                <h3>{project.title}</h3>
                <small>{project.desc}</small>
            </Animated.div>
        )

    };

}