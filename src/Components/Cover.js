import React, { Component } from 'react';

import '../Stylesheets/Cover.css';

import About from './About';
import ProjectSlot from './ProjectSlot';
import Courses from './Courses';

export default class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentScrollHeight: null,
            currentBorderTarget: null,
            onProjects: false,
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            this.setState({ currentScrollHeight: window.scrollY })
        }
    }

    render() {

        let { currentTab } = this.props;

        return (
            <div>
                {/* <div className="night">
                        {new Array(10).fill(0).map(star =>
                            <div className="shooting_star"></div>
                        )}
                    </div> */}
                <div className="current-tab">
                    <div className="tab-chosen">
                        {currentTab == "PROJECTS" ? <ProjectSlot /> : currentTab == "ABOUT" ? <About /> : <Courses />}
                    </div>
                </div>
            </div >
        )
    }
}
