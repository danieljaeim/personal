import React from 'react';
import '../Stylesheets/BigProject.css';
import Javascript from '../images/javascript-icon.svg';
import Java from '../images/java-icon.svg';
import ReactIcon from '../images/react-icon.svg';
import Redux from '../images/redux-icon.svg';
import Flask from '../images/flask.svg';
import Python from '../images/python.svg';
import CSharp from '../images/c-sharp.svg';
import Unity from '../images/unity.svg';
import CSS from '../images/css.svg';
import HTML from '../images/html.svg';

export default class BigProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            extended: false
        }
    }

    iconMap = {
        'javascript': Javascript,
        'java': Java,
        'react': ReactIcon,
        'redux': Redux,
        'flask': Flask,
        'python': Python,
        'C#': CSharp,
        "unity": Unity,
        'css': CSS,
        'html': HTML
    }

    render() {
        const { name, description, keywords, github, currentExtended, sidelink, demo, ext, updateExtended, index } = this.props;
        let imgSrc = require('../Data/gifs/' + name + '.gif');

        return (
            <div className={`big-project-box`}>
                <div className="big-inspect-wrapper">
                    <img className="project-img" src={imgSrc}></img>
                    <span className="project-inspect">
                    <span className="project-ext-description">
                        <span className="project-inspect-ext"> {ext} </span>
                    </span>
                    </span>
                </div>
                <a className="project-name" href={github} target="_blank">{name}</a>
                <span className="project-description"> {description} </span>
                <span className="big-tool-box"> {keywords.map(_ => <img className="big-project-icon" src={this.iconMap[_]}></img>)} </span>
                {demo ? <span className="project-dropdown" onClick={_ => { updateExtended(index); this.setState(st => ({ extended: !st.extended })) }} >
                    <a href={demo} target="_blank" className="project-dropdown-extended"></a>
                    <a href={demo} target="_blank" style={{textDecoration: 'none'}}className="project-dropdown-arrow"> DEMO </a>
                </span> : null
                }
            </div>
        );
    }
}
