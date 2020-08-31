const projectData = [
    {
        name: "enigma",
        keywords: ["java"],
        description: "The legendary encryption machine used during World War 2. \n" +
                     "Enigma encrypts text files through rotors to a range of 2 billion permutations with complete decryption isomorphism. " +
                     "Great for sending messages to friends in class. ",
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj1/enigma"
    },
    {
        name: "crow",
        keywords: ["python", "flask", "SQL", "postGres"],
        description: "Server-side rendered Twitter clone I made in Flask, with complete " + 
                     "sign-up features, password protection, profile editing, a searchbar for users, and like/follow functionality. Seed data was \n " +
                     "made to upload on a PostGres SQL server. Join the Night's Watch! ",
        github: "https://github.com/danieljaeim/Crow"
    },
    {
        name: "gifsmos",
        keywords: ["javascript", "redux", "react"],
        description: " A front-end wrapper to Desmos' private API. " +
                     " I worked on the action-creator scaffold that supported the timeline and frame editor features I headed as a project lead. " + 
                     " For unit testing and integration tests I used the React-Testing Library, increasing testing coverage by 77%.",
        github: "https://github.com/desmosinc/gifsmos"
    },
    {
        name: "tablut",
        keywords: ["java", "games"],
        description: "A recreation of the 15th century Nordic board game, with a fully fledged AI opponent that looks at least 9 optimal moves ahead, " +
                     "using alpha-beta pruning for scalability, and heuristics developed specifically for destroying humans. I'm so bad at this game it's nuts.",
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj2/tablut"
    },
    {
        name: "gitlet",
        keywords: ["java"],
        description: "A compact version control system with full functionality for adding, " +
                     " commiting, removing, branching, checking out, and merging local files, and plenty more!" +
                     " Gitlet tracks local files across commits and retrieves them at will, using Serializable Data Structures",
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj3/gitlet"
    },
    {
        name: "signpost",
        keywords: ["java", "games"],
        description: "Modeled after Simon Tatham's very own arrow pointer game, Signpost is a recreation of a nifty " +
                     "puzzle game where you try connecting all the arrows on the board, in the direction the squares are \n" +
                     " randomly assigned. This was built as my first major project in Java. GUI was courtesy of the CS61B course staff.",
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj0/signpost"
    },
    {
        name: "birb",
        keywords: ["C#/unity", "games"],
        description: "My team's submission for the 39-hour Berkeley BearJam. \n" +
                     " In birb, you play as a man facing existential dread with a burning ambition to defeat the sun by chucking birds at...the sun? It's a \n" +
                     " riveting metaphor for capitalism, at least that's what we told ourselves after pulling an all-night at 5 in the morning. ",
        github: "https://daidiimon.itch.io/birb"
    },
    {
        name: "seed",
        keywords: ["C#/unity", "games"],
        description: "As a seed gladiator, you lobby spells and accrue wins, so " +
                     "your devotion towards your god strengthens. As you win rounds, unlock new cards and abilities to outwit and decimate your opponent. Made \n " +
                     " and designed by my Decal Team on the Berkeley Development Club. Check out my design doc",
        github: "https://seedhanyoung.itch.io/seed",
        sidelink: "https://docs.google.com/document/d/1sfxhbt0TFKQ5BVOER4rvBqXnMHJt6xBMgZspIu74xeg/edit?usp=sharing"           
    },
    {
        name: "fedoracheckers",
        keywords: ["javascript", "react", "CSS", "games"],
        description: "My first React project. A straightforward checkers clone that employed theories of encapsulation, and " +
                     "it proved to be a fun experience recreating checkers in a non-game engine. Capturing logic was an interesting challenge \n" +
                     "especially before I knew about recursion",
        github: "https://github.com/danieljaeim/connect-fedora"             
    },
    {
        name: "pokecatcher",
        keywords: ["javascript", "CSS", "games"],
        description: "A card-flip game inspired by my love for Pokemon. My first ever HTML project and game made using code! Written entirely in Javascript and HTML and CSS.",
        github: "https://github.com/danieljaeim/memory-Catcher"
    }
]
export default projectData;