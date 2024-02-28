function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SET_ACTIVE_STEP':
            return { ...state, activeStep: payload.activeStep };
        case 'SET_GROUP_NAME':
            return { ...state, group_name: payload.group_name };
        case 'SET_STRUCTURES':
            const normalisedStructures = payload.structures.reduce((acc, structure) => {
                acc[structure.name] = structure;
                return acc;
            }, {});
            return { ...state, structures: normalisedStructures };
        case 'SET_MEMBERS':
            debugger
            const normalisedMembers = payload.members.reduce((acc, member) => {
                acc[member.email] = member;
                return acc;
            }, {});
            return { ...state, members: normalisedMembers };
        default:
            throw new Error("action is not implemented");
    }
}


export default reducer;