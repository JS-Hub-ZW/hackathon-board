const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_HACKATHONS":
            return {
                ...state,
                hackathons: action.payload
            }
        case "ADD_CONTRIBUTERS":
            return {
                ...state,
                contributors: action.payload
            }
        default:
            return state
        
    }
}


export default reducer;