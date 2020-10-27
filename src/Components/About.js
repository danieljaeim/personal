import React from 'react';
import '../Stylesheets/About.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            sleeping_index: 1,
            phase: "SLEEPING",
            sleepTimer: null
        };
    }

    componentDidMount = () => {
        let timer = setInterval(this.setState(st => ({ sleeping_index: (st.sleeping_index + 1) % this.sleeping_faces.length})), 1);
        this.setState({sleepTimer: timer});
    }

    increment = _ => {
        this.setState(st => ({ index: st.index + 1 }));
    }

    randomIndex = () => {
        let rand = Math.floor(Math.random() * 3);
        console.log(rand)
        return rand;
    }

    text = ['…zzzZZZ ', '(- o – ) zzZ', 'A guest?'];
    sleeping_faces = ['(´-_ゝ -`)', '(´-  _ゝ~ -`)', '(´- _ゝ-`)'];

    render() {

        let { sleeping_index, index } = this.state;

        return (
            <div className="about-canvas">
                <span className="intro-span">
                        <span className="sleeping-faces"> {this.sleeping_faces[sleeping_index]} </span>
                        <span className="sleeping-text">{this.text[index]}</span>
                    {/* <h1>  {this.text[index]} </h1> */}
                    {/* <ul>  Tough times, huh... *show clips of news reel* </ul>
                    <ul>  Well, don't look at me. I didn't have anything to do with it. </ul>
                    <ul>  I'm just a simple undergrad tinkering with his computers, writing software, and making games. </ul>
                    <ul>   </ul> */}
                </span>

            </div >
        );
    }
}

export default About;
