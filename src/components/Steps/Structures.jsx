import { useContext, useEffect, useState } from "react";
import ActionBar from "../Actionbar/ActionBar";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";
import SearchBar from "../search-bar/SearchBar";
import StructureTable from "./structures/StructureTable";

function Structures() {
    const { setActiveStep } = useContext(PermissionGroupContext);

    const [strucutres, setStrucutres] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // TODO set via api call
        setStrucutres(["Phoneix", "Jupiter", "Saturn", "Pyramid", "Nile"]);
        setRoles(["Full access", "No access", "Basic access"]);
    }, []);


    function handleOnSubmitStep(e) {
        e && e.preventDefault();
        // TODO store form data in reducer.
        setActiveStep(MODEL_STATE.ENTITIES);
    }

    return (
        <>
            <div class="px-6 py-6 space-y-4 ">
                <p class="text-base leading-relaxed text-gray-900 font-bold">
                    Which Structures would you like to grant access to?
                </p>
                <span class="text-base leading-relaxed text-gray-500">
                    Action is required to at least one structure.
                </span>

                {/* Search Bar */}
                <SearchBar
                    searchCount={`${strucutres.length} Structures`}
                />

                <StructureTable strucutres={strucutres} filter="" />
            </div>
            <ActionBar onNextClick={handleOnSubmitStep} />
        </>
    );
}

export default Structures;