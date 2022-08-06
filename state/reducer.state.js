reducer = (state, action) => {

    switch (action.type) {
        case "ADD_HACKATHONS":
            return {
                ...state,
                hackathons: action.payload
            }
        case "REMOVE_HACKATHON":
            return {
                ...state,
                hackathons: state.hackathons.filter(hackathon => hackathon.id !== action.payload)
            }
        default:
            return state
        
    }
}


export default reducer;