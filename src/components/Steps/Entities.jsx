import { useContext } from "react";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";
import SearchBar from "../search-bar/SearchBar";
import ActionBar from "../Actionbar/ActionBar";

function Entities() {
    const { setActiveStep } = useContext(PermissionGroupContext);

    function handleOnSubmitStep(e) {
        e && e.preventDefault();
        // TODO store form data in reducer.
        setActiveStep(MODEL_STATE.MEMBERS);
    }

    return (
        <>
            <div class="px-6 py-6 space-y-4 ">
                <p class="text-base leading-relaxed text-gray-900 font-bold">
                    Which Entities would you like grant access to?
                </p>
                <span class="text-base leading-relaxed text-gray-500">
                    Entity role have been inherited from structure roles
                </span>

                {/* Search Bar */}
                <SearchBar
                    searchCount={`${0} Entities`}
                />

            </div>
            <ActionBar onNextClick={handleOnSubmitStep} />
        </>
    );
}

export default Entities;