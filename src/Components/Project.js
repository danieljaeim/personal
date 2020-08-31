import React, { Component } from 'react';
import "../Stylesheets/Project.css";

import colorFunc from '../Data/Projects/colorfunction';
import Jump from 'react-reveal/Fade';


export default class Project extends Component {
    render() {
        const { name, description, keywords, github, sidelink } = this.props;
        let gifData = require(`../Data/gifs/${name}.gif`);

        return (
            <Jump clear>
                <div className="instance-project">
                    <img className="instance-img"
                        src={gifData}
                        alt={name}>
                    </img>
                    <div className="instance-info-holder">
                        <a className="instance-name" href={github} alt={name}>
                            {name}
                        </a>
                        <span className="tags-bar">
                            <div className="tag-desc-hub">
                                {keywords.map((word, i) =>
                                    word !== "games" ?
                                        <div className="tag-desc"
                                            style={{
                                                right: `${1 * word.length * i}`,
                                                width: `${word.length * 8.5}px`,
                                            }}
                                        >
                                            {word}
                                            <span className="tag-span" />
                                            <span className="tag-span" />
                                            <span className="tag-span" />
                                        </div> : null)}
                            </div>
                        </span>
                    </div>
                    <div className="instance-info">
                        {description}
                    </div>
                    {sidelink? <a href={sidelink} alt="" className="side-link">
                        Game-Doc
                    </a> : null
                    }

                </div>
            </Jump>
        )
    }
}
