function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SET_ACTIVE_STEP':
            return { ...state, activeStep: payload.activeStep };
        case 'SET_GROUP_NAME':
            return { ...state, group_name: payload.group_name };
        default:
            throw new Error("action is not implemented");
    }
}


export default reducer;