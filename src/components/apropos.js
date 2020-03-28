import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import cover from '../images/aymoz.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';

export default class Apropos extends Component {
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
	componentWillReceiveProps(nextProps) {

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

		return (
			<div className="page about">
				<div className="left" style={{position: 'absolute'}}>
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

					<h1 className="hidden-xs">A propos </h1>
					<div className="formation hidden-xs">

						<h6>Expériences </h6>
						<p className="smaller">
							<span className="bold yearSpace"> Now :</span> Développeur Freelance Web <br/>
							<span className="bold yearSpace"> 2017 :</span> Ingénieur Projet Web @Coreoz <br/>
							<span className="bold yearSpace">2015 - 2016 :</span> Ingénieur Web - Full Stack @Cardiweb<br/>
						</p>

						<h6>Formation </h6>
						<p className="smaller">
                            <span className="bold">⟹ </span>Master Technologie et Création Contemporaine - ENSCI
                            <br/><small>Félicitations du jury</small><br/>
							<span className="bold">⟹ </span>Ingénieur informatique - Université technologique de Compiègne<br/>
                            <small>Diplôme Mineur Technologie Culturelles du Numérique</small>
						</p>
						<h6>Contact </h6>
						<p className="smaller">
							<a href="mailto:jonas.aymoz@gmail.com"> M'envoyer un email 👋️</a>
						</p>
					</div>

				</div>

				<div style={{flex : 2}} className="hidden-xs"></div>
				<div className='right' style={{flex : 3}}>
					<div className="flex" style={{ display : 'flex', flexDirection : 'row'}}>
						<div style={{flex : 3, padding : '10px'}}>
                            <h6>Hello,</h6>
							<p>Je suis Jonas, ingénieur en informatique, et développeur freelance Web.</p>
						</div>
                        <div style={{flex : 1, padding : '10px' }}>
                            <img src={cover} className="coverImg"/>
							<div className="coverImgBg"></div>
                        </div>
					</div>


					<div className="skill-list">
                        <div  className="skill-item">
                            <h3>Conception de projets numériques</h3>
                            
                        </div>
                        <div className="skill-item">
                            <h3>Maquettage et prototypage</h3>
                            
                        </div>
                        <div className="skill-item">
                            <h3>Web design</h3>
                            
                        </div>
						<div className="skill-item">
							<h3>Développement Web</h3>

						</div>

						<div className="skill-item">
							<h3>Intégration HTML</h3>

						</div>


						<div className="skill-item">
							<h3>Déploiement et maintenance</h3>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
