import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import cover from '../images/coverPic.png';

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
							<span className="bold yearSpace"> Now :</span> Développeur Freelance Web ;) <br/>
							<span className="bold yearSpace"> 2017 :</span> Ingénieur Projet Web @Coreoz <br/>
							<span className="bold yearSpace">2015 - 2016 :</span> Ingénieur Web - Full Stack @Cardiweb<br/>
						</p>

						<h6>Formation </h6>
						<p className="smaller">
							<span className="bold">⟹ </span>Ingénieur informatique de l'Université technologique de Compiègne<br/>
							<span className="bold">⟹ </span>Diplôme Mineur Technologie Culturelles du Numérique
						</p>
						<h6>Contact </h6>
						<p className="smaller">
							Pour un conseil, lancer un projet, ou aller boire un café, n’hésitez pas à me contacter !<br/>
							<a href="mailto:jonas.aymoz@gmail.com"> m'envoyer un email ;)</a>
						</p>
					</div>

				</div>

				<div style={{flex : 2}} className="hidden-xs"></div>
				<div className='right' style={{flex : 3}}>
					<div className="flex" style={{ display : 'flex', flexDirection : 'row'}}>
						<div style={{flex : 3, padding : '10px'}}>
                            <h6>Hello,</h6>
                            <p>Je suis Jonas, ingénieur en informatique, et développeur freelance Web.<br/>

                                Si vous cherchez à développer un projet web, <u>vous êtes au bon endroit.</u></p>
						</div>
                        <div style={{flex : 1, padding : '10px' }}>
                            <img src={cover} className="coverImg"/>
							<div className="coverImgBg"></div>
                        </div>
					</div>


					<h6>Ce que je fait</h6>
					<br/>
					<ul className="unstyled">
						<li>
							<h3>Développement Web</h3>
							<div className="svg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="234.92 66.969 372.05 342.286" enable-background="new 234.92 66.969 372.05 342.286" >
								<g>
									<g>
										<path d="M599.529,66.969H242.361c-4.107,0-7.44,3.333-7.44,7.44v327.404c0,4.115,3.333,7.441,7.44,7.441h357.168
											c4.115,0,7.441-3.326,7.441-7.441V74.41C606.97,70.302,603.644,66.969,599.529,66.969z M592.088,394.374H249.802V81.851h342.286
											V394.374z"/>
										<path d="M326.392,317.783c1.451,1.451,3.356,2.181,5.261,2.181c1.905,0,3.81-0.729,5.261-2.181l74.41-74.41
											c2.909-2.909,2.909-7.612,0-10.521l-74.41-74.41c-2.909-2.909-7.612-2.909-10.521,0s-2.909,7.612,0,10.521l69.149,69.149
											l-69.149,69.149C323.483,310.171,323.483,314.874,326.392,317.783z"/>
										<path d="M435.826,319.964h74.41c4.115,0,7.441-3.326,7.441-7.441c0-4.114-3.326-7.44-7.441-7.44h-74.41
											c-4.114,0-7.44,3.326-7.44,7.44C428.386,316.637,431.712,319.964,435.826,319.964z"/>
									</g>
								</g>
								</svg>
							</div>
						</li>
						<li>
							<h3>Web design</h3>
							<div className="svg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="234.92 66.969 372.05 342.286" enable-background="new 234.92 66.969 372.05 342.286" >
									<g>
										<g>
											<path d="M599.529,66.969H242.361c-4.107,0-7.44,3.333-7.44,7.44v327.404c0,4.115,3.333,7.441,7.44,7.441h357.168
											c4.115,0,7.441-3.326,7.441-7.441V74.41C606.97,70.302,603.644,66.969,599.529,66.969z M592.088,394.374H249.802V81.851h342.286
											V394.374z"/>
											<path d="M326.392,317.783c1.451,1.451,3.356,2.181,5.261,2.181c1.905,0,3.81-0.729,5.261-2.181l74.41-74.41
											c2.909-2.909,2.909-7.612,0-10.521l-74.41-74.41c-2.909-2.909-7.612-2.909-10.521,0s-2.909,7.612,0,10.521l69.149,69.149
											l-69.149,69.149C323.483,310.171,323.483,314.874,326.392,317.783z"/>
											<path d="M435.826,319.964h74.41c4.115,0,7.441-3.326,7.441-7.441c0-4.114-3.326-7.44-7.441-7.44h-74.41
											c-4.114,0-7.44,3.326-7.44,7.44C428.386,316.637,431.712,319.964,435.826,319.964z"/>
										</g>
									</g>
								</svg>
							</div>
						</li>
						<li>
							<h3>Intégration HTML</h3>
							<div className="svg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="234.92 66.969 372.05 342.286" enable-background="new 234.92 66.969 372.05 342.286" >
									<g>
										<g>
											<path d="M599.529,66.969H242.361c-4.107,0-7.44,3.333-7.44,7.44v327.404c0,4.115,3.333,7.441,7.44,7.441h357.168
											c4.115,0,7.441-3.326,7.441-7.441V74.41C606.97,70.302,603.644,66.969,599.529,66.969z M592.088,394.374H249.802V81.851h342.286
											V394.374z"/>
											<path d="M326.392,317.783c1.451,1.451,3.356,2.181,5.261,2.181c1.905,0,3.81-0.729,5.261-2.181l74.41-74.41
											c2.909-2.909,2.909-7.612,0-10.521l-74.41-74.41c-2.909-2.909-7.612-2.909-10.521,0s-2.909,7.612,0,10.521l69.149,69.149
											l-69.149,69.149C323.483,310.171,323.483,314.874,326.392,317.783z"/>
											<path d="M435.826,319.964h74.41c4.115,0,7.441-3.326,7.441-7.441c0-4.114-3.326-7.44-7.441-7.44h-74.41
											c-4.114,0-7.44,3.326-7.44,7.44C428.386,316.637,431.712,319.964,435.826,319.964z"/>
										</g>
									</g>
								</svg>
							</div>
						</li>
						<li>
							<h3>Conception de projets numériques</h3>
							<div className="svg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="234.92 66.969 372.05 342.286" enable-background="new 234.92 66.969 372.05 342.286" >
									<g>
										<g>
											<path d="M599.529,66.969H242.361c-4.107,0-7.44,3.333-7.44,7.44v327.404c0,4.115,3.333,7.441,7.44,7.441h357.168
											c4.115,0,7.441-3.326,7.441-7.441V74.41C606.97,70.302,603.644,66.969,599.529,66.969z M592.088,394.374H249.802V81.851h342.286
											V394.374z"/>
											<path d="M326.392,317.783c1.451,1.451,3.356,2.181,5.261,2.181c1.905,0,3.81-0.729,5.261-2.181l74.41-74.41
											c2.909-2.909,2.909-7.612,0-10.521l-74.41-74.41c-2.909-2.909-7.612-2.909-10.521,0s-2.909,7.612,0,10.521l69.149,69.149
											l-69.149,69.149C323.483,310.171,323.483,314.874,326.392,317.783z"/>
											<path d="M435.826,319.964h74.41c4.115,0,7.441-3.326,7.441-7.441c0-4.114-3.326-7.44-7.441-7.44h-74.41
											c-4.114,0-7.44,3.326-7.44,7.44C428.386,316.637,431.712,319.964,435.826,319.964z"/>
										</g>
									</g>
								</svg>
							</div>
						</li>
						<li>
							<h3>Maquettage et prototypage</h3>
							<div className="svg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="234.92 66.969 372.05 342.286" enable-background="new 234.92 66.969 372.05 342.286" >
									<g>
										<g>
											<path d="M599.529,66.969H242.361c-4.107,0-7.44,3.333-7.44,7.44v327.404c0,4.115,3.333,7.441,7.44,7.441h357.168
											c4.115,0,7.441-3.326,7.441-7.441V74.41C606.97,70.302,603.644,66.969,599.529,66.969z M592.088,394.374H249.802V81.851h342.286
											V394.374z"/>
											<path d="M326.392,317.783c1.451,1.451,3.356,2.181,5.261,2.181c1.905,0,3.81-0.729,5.261-2.181l74.41-74.41
											c2.909-2.909,2.909-7.612,0-10.521l-74.41-74.41c-2.909-2.909-7.612-2.909-10.521,0s-2.909,7.612,0,10.521l69.149,69.149
											l-69.149,69.149C323.483,310.171,323.483,314.874,326.392,317.783z"/>
											<path d="M435.826,319.964h74.41c4.115,0,7.441-3.326,7.441-7.441c0-4.114-3.326-7.44-7.441-7.44h-74.41
											c-4.114,0-7.44,3.326-7.44,7.44C428.386,316.637,431.712,319.964,435.826,319.964z"/>
										</g>
									</g>
								</svg>
							</div>
						</li>
						<li>
							<h3>Déploiement et maintenance</h3>
							<div className="svg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="234.92 66.969 372.05 342.286" enable-background="new 234.92 66.969 372.05 342.286" >
									<g>
										<g>
											<path d="M599.529,66.969H242.361c-4.107,0-7.44,3.333-7.44,7.44v327.404c0,4.115,3.333,7.441,7.44,7.441h357.168
											c4.115,0,7.441-3.326,7.441-7.441V74.41C606.97,70.302,603.644,66.969,599.529,66.969z M592.088,394.374H249.802V81.851h342.286
											V394.374z"/>
											<path d="M326.392,317.783c1.451,1.451,3.356,2.181,5.261,2.181c1.905,0,3.81-0.729,5.261-2.181l74.41-74.41
											c2.909-2.909,2.909-7.612,0-10.521l-74.41-74.41c-2.909-2.909-7.612-2.909-10.521,0s-2.909,7.612,0,10.521l69.149,69.149
											l-69.149,69.149C323.483,310.171,323.483,314.874,326.392,317.783z"/>
											<path d="M435.826,319.964h74.41c4.115,0,7.441-3.326,7.441-7.441c0-4.114-3.326-7.44-7.441-7.44h-74.41
											c-4.114,0-7.44,3.326-7.44,7.44C428.386,316.637,431.712,319.964,435.826,319.964z"/>
										</g>
									</g>
								</svg>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
