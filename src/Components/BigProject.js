import React from 'react';
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
import '../Stylesheets/BigProject.css';

export default class BigProject extends React.Component {

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
        const { name, description, keywords, github, demo, ext, updateExtended, index } = this.props;
        let imgSrc = require('../Data/gifs/' + name + '.gif');


        return (
            <>
                <div className={`big-project-box`}>
                    <img className="project-img" src={imgSrc}></img>
                    <span className="project-inspect-ext"> {ext} </span>
                    <div className='description-panel'>
                        <a className="project-name" href={github} target="_blank">{name}</a>
                        <span className="project-description"> {description} </span>
                        <span className="big-tool-box"> {keywords.map(_ =>
                        <span className="big-project-icon-holder">
                            <img className="big-project-icon" src={this.iconMap[_]}/>
                            <span className="tooltiptext"> {_} </span>
                        </span>
                        )} </span>
                    </div>
                    {demo ? <span className="project-dropdown">
                        <a href={demo} target="_blank" style={{ textDecoration: 'none' }} className="project-dropdown-arrow"> DEMO </a>
                    </span> : null
                    }
                </div>
                <div style={{ flexBasis: '100%', height: 0 }} />
            </>
        );
    }
}
