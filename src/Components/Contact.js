import React from 'react';
import LinkedIn from '../images/linkedin.svg';
import GitHub from '../images/github.svg';
import Resume from '../images/resume.svg';
import Email from '../images/email.svg';

class Contact extends React.Component {
    render() {
        return (
            <div className="icon-hub">
                <a className="link-linkedin" href="https://www.linkedin.com/in/imdanieljae/" target="_blank">
                    <img className="icon-linkedin" src={LinkedIn} alt="linkedin" />
                </a>
                <a className="link-github" href="https://github.com/danieljaeim" target="_blank">
                    <img className="icon-github" src={GitHub} alt="github" />
                </a>
                <a className="link-resume" href="https://drive.google.com/file/d/1cgG3uldm_4H7J0a_qTjDEc4iqXLmISBS/view?usp=sharing" target="_blank">
                    <img className="icon-resume" src={Resume} alt="resume" />
                </a>
                <a className="link-email" href="mailto: imdanieljae@gmail.com" target="_blank">
                    <img className="icon-email" src={Email} alt="email" />
                </a>
            </div>
        );
    }
}

export default Contact;
