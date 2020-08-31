import React, { Component } from 'react';
import '../Stylesheets/Carpet.css';

import Cover from '../Data/gifs/me.gif';
import Fade from 'react-reveal/Fade';

import CoverVid from '../images/landingvid.mp4';

import WizardHat from '../images/powerfulhat.png';
import Courses from './Courses';


export default class Carpet extends Component {
    render() {

        return (
            <div classname="carpet" style={{ backgroundColor: "#1b2735" }}>
                <Fade>
                    <div className="carpet-about">
                        <div className="carpet-background"></div>
                        <video className="carpet-photo" width='80' height='300' alt="cover" controls>
                            <source src={CoverVid} type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                        </video>
                        <Fade left>
                            <div className='carpet-about-me'>Greetings
                        <span className="tag" style={{ color: 'pink' }}> web traveler </span>
                                to my virtual abode.
                                This site is a growing repository for my
                            <span className="tag" style={{ color: 'tomato' }} > projects </span> and general #postironic musings.
                                    I'm a sophomore at UC Berkeley studying Computer Science, with a real passion for
                                    developing skills and prototyping things online. Right now my projects are mostly in the realm of
                            <span className="tag" style={{ color: 'purple' }}> web development, </span>
                                <span className="tag" style={{ color: 'green' }}> music production, </span> and
                            <span className="tag" style={{ color: 'goldenrod' }}> making video games</span>.
                                    But I'm always looking for opportunities to try new things. If you're looking
                                    for a software engineer this Summer 20'. Feel free to peruse my wares and reach
                             out through my email. Oh and remember: if you break it, you buy it. </div>
                        </Fade>
                    </div>
                </Fade>
                {/* <div className="hammer">
                    <img className="hammer-img" src={Hammer} alt="hammer">

                    </img>
                </div> */}
                <Courses />
            </div>
        )
    }
}
