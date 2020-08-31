import React, { Component } from 'react';
import '../Stylesheets/ProjectSlot.css';

import Project from '../Components/Project';

import projectData from '../Data/Projects/projectdata';
import { Element } from 'react-scroll';

export default class ProjectSlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategories: {
                javascript: false,
                java: false,
                python: false,
                react: false,
                'c#': false,
                games: false,
                count: 0,
                all: true
            },
            innerWidth: window.innerWidth,
        }
    }

    selectProject = function (projectName) {
        const { currentCategories } = this.state;
        const { count, all } = currentCategories;
        if (all) {
            const currentCategoriesCopy = {...currentCategories}
            currentCategoriesCopy.all = false;
            currentCategoriesCopy.count = 1;
            currentCategoriesCopy[projectName] = true;
            this.setState(st => ({ currentCategories: currentCategoriesCopy }))
            return;
        } else if (count === 7) {
            const currentCategoriesCopy = {...currentCategories}
            currentCategoriesCopy.all = true;
            currentCategories.count = 0;
            for (let key in currentCategories) {
                if (key !== 'count' || key !== 'all')
                currentCategories[key] = false;
            }
            this.setState(({ currentCategories: currentCategoriesCopy }))
            return;
        } else { 
            
            let { count } = this.state.currentCategories;
            let projName = this.state.currentCategories[projectName];
            
            this.setState(st => ({ currentCategories: {...st.currentCategories, 
                                count: projName ? count - 1 : count + 1,
                                [projectName]: !projName,
                                all: false }}), 
            );
        }
    }

    render() {
        const listOfCategories = ['javascript', 'java', 'python', 'react', 'C#/unity', 'games'];
        let { currentCategories } = this.state;
        let { all } = currentCategories; 

        return (
            <Element name="project-scroll">
                <div className="projectslot-bg">
                    <div className="project-canvas">
                        <div className="project-header"> Projects
                        <div className="project-filter-hub">
                                {listOfCategories.map(category =>
                                    <button className="project-category"
                                        style={{ fontSize: `${30 - category.length}px`,
                                                 background: currentCategories[category] ? 'tomato' : 'none' }}
                                        onClick={() => this.selectProject(category)}>
                                        {category}.
                            </button>)}
                            </div>
                        </div>
                        {projectData.map(project =>
                            all || project.keywords.some(keyword => currentCategories[keyword]) ?
                                <Project
                                    {...project}
                                /> : null 
                            )}
                    </div>
                </div>
            </Element>
        );
    }
}
