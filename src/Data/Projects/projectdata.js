const projectData = [
    // {
    //     name: "enigma",
    //     keywords: ["java"],
    //     description: "Encryption Machine",
    //     github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj1/enigma"
    // },
    {
        name: "spotluck",
        keywords: ["javascript", "react"],
        description: "Spotify Music Recommender",
        ext: 'Search for new music and artists based on your recent Spotify Feed! Also serves as an in-site music player and track selector that lets you play songs in the browser! Employs the SDK Web player, and a recommendation engine I built through user data. Full demo works best through Github pull.',
        demo: 'https://obscure-badlands-09960.herokuapp.com/',
        github: "https://github.com/danieljaeim/Crow"
    },
    {
        name: "gifsmos",
        keywords: ["javascript", "redux", "react", 'css'],
        description: "Graph Visualizer",
        ext: 'At Desmos Inc, I created a front-end wrapper that interacts with the company\'s backend graphing API to allow users to simulate graphs and project them as GIFS. In charge of the timeline feature, as well as writing unit tests and integration tests through Jaspar and the React-Testing-Library, increasing testing coverage by 77%.',
        demo: "http://www.gifsmos.com",
        github: "https://github.com/desmosinc/gifsmos"
    },
    {
        name: "crow",
        keywords: ["python", "flask"],
        description: "Twitter Clone",
        ext: 'A server-side rendered Twitter clone I built with Flask and HTML templates. Password protected accounts are encrypted and stored in a SQL database.',
        github: "https://github.com/danieljaeim/Crow"
    },
    {
        name: "tablut",
        keywords: ["java"],
        description: "Alpha Beta Pruning AI",
        ext: 'For my data structures course, I implemented Tablut and built an AI opponent using alpha-beta pruning and a set of heuristics to efficiently see multiple moves ahead.',
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj2/tablut"
    },
    {
        name: "gitlet",
        keywords: ["java"],
        description: "Compact Github Clone",
        ext: 'A quick and dirty Github clone that serializes files into blobs with SHA-1 hashing. Possible commands are adds, commit, branch, checkout, revert, log, merge',
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj3/gitlet"
    },
    {
        name: "signpost",
        keywords: ["java"],
        description: "Arrow Minigame",
        ext: 'A recreation of the Simon Tatham Arrow pointer game. Used recursion to implement successive move logic, and served as a great introduction to OOP.',
        github: "https://github.com/danieljaeim/CS61B-Series/tree/master/proj0/signpost"
    },
    {
        name: "birb",
        keywords: ["C#", "unity"],
        ext: 'Implemented movement scripts and character-physics rigging for a 36-hour gamejam hosted by the UC Berkeley GameJam 2019.',
        description: "Berkeley Gamejam 2019",
        demo: 'https://daidiimon.itch.io/birb',
        // github: "https://daidiimon.itch.io/birb"
    },
    {
        name: "seed",
        keywords: ["C#", "unity"],
        description: "Berkeley Gamejam 2020",
        github: "https://docs.google.com/document/d/1sfxhbt0TFKQ5BVOER4rvBqXnMHJt6xBMgZspIu74xeg/edit?usp=sharing",
        demo: 'https://seedhanyoung.itch.io/seed',
        ext: 'I implemented the battle-cards logic, tile-interactions, and designed the game for the UC Berkeley Gamejam 2020.',
        // sidelink: "https://docs.google.com/document/d/1sfxhbt0TFKQ5BVOER4rvBqXnMHJt6xBMgZspIu74xeg/edit?usp=sharing"
    },
    {
        name: "fedoracheckers",
        keywords: ["javascript", "react", 'html', 'css'],
        description: "Checkers",
        ext: 'My first React app. Implemented everything from scratch, from movement, to piece logic. Learned to seperate concerns using dumb components.',
        github: "https://github.com/danieljaeim/connect-fedora"
    },
    {
        name: "pokecatcher",
        keywords: ["javascript", "css", 'html'],
        description: "Card Matcher",
        ext: 'My first ever app. A simple card-flipping app that keeps track of your score. Inspired by that game everyone knows.',
        github: "https://github.com/danieljaeim/memory-Catcher"
    }
]
export default projectData;