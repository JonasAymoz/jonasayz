import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import posts from '../posts/posts';
const ReactMarkdown = require('react-markdown');

export default class Project extends Component {
	constructor(props) {
        super(props);
        this.state = {
            selectedProject: {},
            animate: new Animated.Value(0),
            markdown : ""
        };
    }
    componentWillMount() {
        // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
        fetch(`../posts/gate.md`)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }))
            .catch((err) => console.error(err));
    }

	componentDidMount() {
		if (this.props.projectName) {
            this.setState({selectedProject : posts.filter(item => item.class == this.props.projectName)[0]});
		}
        setTimeout(
            () => {
                Animated.spring(this.state.animate, {toValue: 1}).start()
            },
            275
        );

	}

	render() {
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
        let md = require(`../posts/${this.props.projectName}.md`);
        let video = { __html: this.state.selectedProject.video};
		return (
			<div className={"page project-item project " + this.state.selectedProject.class} >

                <Animated.span
                    style={rotate}
                    className="square">
                    <span className="square"></span>
                </Animated.span>
                <div>
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
                    <h1>{this.state.selectedProject.title}</h1>
                    <p>{this.state.selectedProject.subtitle}</p>
                    <p>
                        <ul className="projectList">
                            <li>
                                <span className="listTitle">WHEN</span>
                                <p>{this.state.selectedProject.year}</p>
                            </li>
                            <li>
                                <span className="listTitle">WITH</span>
                                <p>{this.state.selectedProject.with}</p></li>
                            <li>
                                <span className="listTitle">ROLE</span>
                                <p>{this.state.selectedProject.role}</p> </li>
                            <li>
                                <span className="listTitle">TOOL</span>
                                <p>{this.state.selectedProject.tool} </p>
                            </li>
                            {this.state.selectedProject.extLink != "" && <li>
                                <span className="listTitle">LINK</span>
                                <p>{this.state.selectedProject.extLink} </p>
                            </li>}
                        </ul>
                    </p>
                </div>
                <img src={`/assets/images/${this.state.selectedProject.class}/2.jpg`}></img>
                <ReactMarkdown source={md.default} />
                {this.state.selectedProject.gif && <div className="gif">
                    <img src={`/assets/images/${this.state.selectedProject.class}/1.gif`}></img>
                </div>}

                {this.state.selectedProject.video && <div dangerouslySetInnerHTML={video}></div>}
                <div >
                    <img src={`/assets/images/${this.state.selectedProject.class}/3.jpg`}></img>
                </div>
                <div >
                    <img src={`/assets/images/${this.state.selectedProject.class}/4.jpg`}></img>
                </div>
                <div>
                    <img src={`/assets/images/${this.state.selectedProject.class}/1.jpg`}></img>
                </div>
                <div>
                    <img src={`/assets/images/${this.state.selectedProject.class}/5.jpg`}></img>
                </div>
                <div>
                    <ReactMarkdown source={this.state.selectedProject.quote} />
                </div>


			</div>
		);
	}
}
