const colorFunc = (keyword) => {
    switch(keyword) {
        case ('java'):
            return 'orange';
        case ('python'):
            return 'purple';
        case ('sql'):
            return 'green';
        case ('flask'):
            return 'skyblue';
        case ('javascript'):
            return 'brown';
        case ('redux'):
            return 'red';
        case ('react'):
            return 'blue';
        default:
            return 'grey';
    }
}


export default colorFunc;