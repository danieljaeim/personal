import React, { Component } from 'react';
import '../Stylesheets/Courses.css';

export default class Courses extends Component {
    render() {
        return (
            <div className="courses-container">
                <div className="courses-header"> Relevant Courses </div>
                <div className="classes-box">
                    <div className="class-div"> 61A: Structure and Intepretation of Computer Programs</div>
                    <div className="class-div"> 61B: Data Structures and Algorithms </div>
                    <div className="class-div"> 61C: Great Ideas in Machine Structures </div>
                    <div className="class-div"> Math54: Linear Algebra and Differential Equations </div>
                    <div className="class-div"> CS70: Discrete Math and Probability Theory </div>
                    <div className="class-div"> CS97: Academic Intern and Assistant for CS61B </div>
                    <div className="class-div"> CS197: Game Development and Design Decal </div>
                    <div className="class-div"> HUM120: Entrepreneurship for All: Guide to Startups </div>
                </div>
            </div>
        )
    }
}
