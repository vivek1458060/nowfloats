const doctorsReducerDefaultState = [];

export default (state = doctorsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_DOCTORS': 
            return action.doctors
        default:
            return state;
    }
}

