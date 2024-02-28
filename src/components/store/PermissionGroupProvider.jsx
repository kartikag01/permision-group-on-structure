"use client"

import { useReducer } from "react";
import PermissionGroupContext from "./Context";
import reducer from "./reducer";
import { MODEL_STATE } from "../constants/constants";

const initialState = {
    activeStep: MODEL_STATE.HIDDEN, // Intital value as hidden
    // step 1
    group_name: "",
    // step 2
    structures: {},
    // step 3
    // TODO?
    // step 4
    members: {},
};

function PermissionGroupProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        // Model and Stepper Step
        activeStep: state.activeStep,//  MODEL_STATE.HIDDEN, // Intital value ass hidden
        setActiveStep: (activeStep) => {
            dispatch({
                type: "SET_ACTIVE_STEP",
                payload: { activeStep },
            });
        },
        // Setp 1 
        group_name: state.group_name,
        setGroup_name: (group_name) => {
            dispatch({
                type: "SET_GROUP_NAME",
                payload: { group_name },
            });
        },
        // Step 2
        structures: state.structures,
        setStoreStructures: (structures) => {
            dispatch({
                type: "SET_STRUCTURES",
                payload: { structures },
            });
        },
        // Step 3
        // TODO?

        // Step 4
        members: state.members,
        setStoreMembers: (members) => {
            dispatch({
                type: "SET_MEMBERS",
                payload: { members },
            });
        },
    }

    return (
        <PermissionGroupContext.Provider value={value}>
            {props.children}
        </PermissionGroupContext.Provider>
    );
}

export default PermissionGroupProvider;