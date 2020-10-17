import React, { Component } from 'react';
import '../Stylesheets/Navbar.css';

import LinkedIn from '../images/linkedin.svg';
import GitHub from '../images/github.png';
import Resume from '../images/resume.svg';

export default class Navbar extends Component {
    render() {

        const { changeTabs } = this.props;

        return (
            <div className="navbar-width">
                <div className="navbar-container">
                    <div className="name-title">
                        <span data-shadow="Daniel Jae Im" className="title-letter"> Daniel Jae Im </span>
                    </div>
                    <div className="selection-tabs">
                        <div onClick={_ => changeTabs("ABOUT")} className="about-selection selection-hover"> about </div>
                        <div onClick={_ => changeTabs("PROJECTS")} className="projects-selection selection-hover"> projects </div>
                        <div onClick={_ => changeTabs("COURSES")} className="classes-selection selection-hover"> courses </div>
                    </div>
                    <div className="icon-hub">
                        <a className="link-linkedin" href="https://www.linkedin.com/in/imdanieljae/">
                            <img className="icon-linkedin" src={LinkedIn} alt="linkedin" />
                        </a>
                        <a className="link-github" href="https://www.linkedin.com/in/imdanieljae/">
                            <img className="icon-github" src={GitHub} alt="linkedin" />
                        </a>
                        <a className="link-resume" href="https://drive.google.com/open?id=1M5rqN3ReZTqQrfak0cK8FweRiD-Ux6Vv">
                            <img className="icon-resume" src={Resume} alt="resume" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
