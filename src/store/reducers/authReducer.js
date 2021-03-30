const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('LOGIN error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('LOGIN SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SECCESS':
            console.log('signout success');
            return state;
        default:
            return state;
    }
}
export default authReducer