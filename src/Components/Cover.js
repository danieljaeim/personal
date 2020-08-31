import React, { Component } from 'react';

import '../Stylesheets/Cover.css';

import LinkedIn from '../images/linkedin.svg';
import GitHub from '../images/github.svg';
import Resume from '../images/resume.svg';
import Carpet from './Carpet';
import { Link } from 'react-scroll';

export default class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentScrollHeight: null,
            currentBorderTarget: null
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            this.setState({ currentScrollHeight: window.scrollY })
        }
    }


    render() {

        const { currentScrollHeight } = this.state;

        return (
            <div>
                <div className="night-bg">
                    <div className="night">
                        {new Array(20).fill(0).map(star =>
                            <div className="shooting_star"></div>
                        )}
                    </div>
                    <div className="cover-container">
                        <div className="icon-hub">
                            <a className="link-linkedin" href="https://www.linkedin.com/in/imdanieljae/">
                                <img className="icon-linkedin" src={LinkedIn} alt="linkedin" />
                            </a>
                            <a className="link-github" href="https://www.linkedin.com/in/imdanieljae/">
                                <img className="icon-github" src={GitHub} alt="github" />
                            </a>
                            <a className="link-resume" href="https://drive.google.com/open?id=1M5rqN3ReZTqQrfak0cK8FweRiD-Ux6Vv">
                                <img className="icon-resume" src={Resume} alt="resume" />
                            </a>
                        </div>
                        <div className="name-title">
                            <span data-shadow="Daniel Jae Im" className="title-letter">Daniel Jae 
                                <div className="title-im">Im</div>
                            </span>
                            <div className="about-me">
                                <h4 className="about-software about-tag">software engineer</h4>
                                <h6 className="about-mspaint about-tag">mspaint connoisseur</h6>
                                <h6 className="about-dogs about-tag">friend of dogs</h6>
                                <h6 className="about-mspaint about-tag">undergrad</h6>
                                <h6 className="about-web about-tag">web guy</h6>
                            </div>
                            {currentScrollHeight < 50 ?
                                <div className="border-text">
                                    <div className="bottom-border"
                                        onMouseEnter={() => { this.setState({ currentBorderTarget: 'bottom' }) }}
                                        onMouseLeave={() => { this.setState({ currentBorderTarget: null }) }}
                                    >
                                        <Link to="project-scroll"
                                            smooth={true}
                                            duration={300} >
                                            <div className="bottom-border-text projects"> projects  </div>
                                        </Link>
                                    </div>
                                    <div className="left-border"
                                        onMouseEnter={() => { this.setState({ currentBorderTarget: 'left' }) }}
                                        onMouseLeave={() => { this.setState({ currentBorderTarget: null }) }}
                                    >
                                        <Link to="carpet-about"
                                            smooth={true}
                                            duration={300}
                                            offset={-50} >
                                            <div className="left-border-text"> About </div>
                                        </Link>
                                    </div>
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
                <Carpet />
            </div >
        )
    }
}
