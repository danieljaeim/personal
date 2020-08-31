import React, { Component } from 'react';
import "../Stylesheets/Farewell.css";

import LinkedIn from '../images/linkedin.svg';
import GitHub from '../images/github.svg';
import Resume from '../images/resume.svg';

export default class Farewell extends Component {
    render() {
        return (
            <div className="farewell-container">
                <div className="react-ending">
                    Let's build something together
                <a href="https://www.youtube.com/watch?v=4rQK4dMeark"
                        alt="valiant-attempt"
                        className="valiant-attempt"> So here's a rap I wrote as an 18 years old...
                    You might like it, but then again I was 18. </a>
                </div>
                <div className="social-links-end">
                    <a className="link-linkedin-end" href="https://www.linkedin.com/in/imdanieljae/">
                        <img className="icon-linkedin-end" src={LinkedIn} alt="linkedin" />
                    </a>
                    <a className="link-github-end" href="https://www.linkedin.com/in/imdanieljae/">
                        <img className="icon-github-end" src={GitHub} alt="github" />
                    </a>
                    <a className="link-resume-end" href="https://drive.google.com/open?id=1M5rqN3ReZTqQrfak0cK8FweRiD-Ux6Vv">
                        <img className="icon-resume-end" src={Resume} alt="resume" />
                    </a>
                </div>
                <a className="react-email react-ending"
                   HREF="mailto:imdanieljae@gmail.com">imdanieljae@gmail.com </a>
                <div className="react-bottom"> Designed and made in React by me :) 👍 </div>
            </div>
        )
    }
}
