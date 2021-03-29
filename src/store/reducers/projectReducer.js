const initState = {
    projects: [
        { id: '1', title: 'help me fined peach', content: 'blah blah blah' },
        { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'egg hunt with dana', content: 'blah blah blah' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROE':
            console.log('Create project error', action.err);
            return state;
        default:
            return state;

    }
}
export default projectReducer