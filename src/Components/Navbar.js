import React, { Component } from 'react';
import '../Stylesheets/Navbar.css';

import LinkedIn from '../images/linkedin.svg';
import GitHub from '../images/github.svg';
import Resume from '../images/resume.svg';
import Email from '../images/email.svg';

export default class Navbar extends Component {

    render() {

        const { changeTabs, currentTab } = this.props;

        return (
            <div className="navbar-width">
                <div className="navbar-container">
                    <div className="name-title">
                        Daniel Jae Im
                    </div>
                    <div className="icon-hub">
                        <a className="link-linkedin" href="https://www.linkedin.com/in/imdanieljae/" target="_blank">
                            <img className="icon" src={LinkedIn} alt="linkedin" />
                        </a>
                        <a className="link-github" href="https://github.com/danieljaeim" target="_blank">
                            <img className="icon" src={GitHub} alt="github" />
                        </a>
                        <a className="link-resume" href="https://drive.google.com/file/d/1bG2pePhpnnAea6sqscQz_vYUVyEKQLNj/view?usp=sharing" target="_blank">
                            <img className="icon" src={Resume} alt="resume" />
                        </a>
                        <a className="link-email" href="mailto: imdanieljae@gmail.com" target="_blank">
                            <img className="icon" src={Email} alt="email" />
                        </a>
                    </div>
                    <div className="selection-tabs">
                        <div onClick={_ => changeTabs("ABOUT")} style={{ color: currentTab == "ABOUT" ? 'black' : 'grey' }} className="about-selection selection-hover"> about </div>
                        <div onClick={_ => changeTabs("PROJECTS")} style={{ color: currentTab == "PROJECTS" ? 'black' : 'grey' }} className="projects-selection selection-hover"> projects </div>
                        {/* <div onClick={_ => changeTabs("CONTACT")} style={{ color: currentTab == "CONTACT" ? 'black' : 'grey' }}  className="classes-selection selection-hover"> contact </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
