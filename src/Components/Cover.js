import React, { Component } from 'react';

import '../Stylesheets/Cover.css';

import About from './About';
import ProjectSlot from './ProjectSlot';
import Contact from './Contact';

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
            <>
                <div className="current-tab">
                    <div className="tab-chosen">
                        {currentTab == "PROJECTS" ? <ProjectSlot /> : currentTab == "ABOUT" ? <About /> : <Contact /> }
                    </div>
                </div>
            </>
        )
    }
}
