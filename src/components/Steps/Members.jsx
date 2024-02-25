import { useContext, useEffect, useState } from "react";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";
import SearchBar from "../search-bar/SearchBar";
import ActionBar from "../Actionbar/ActionBar";
import MemberList from "./members/MemberList";

function Members() {
    const { setActiveStep } = useContext(PermissionGroupContext);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // TODO fetch members from API.
        setMembers([
            { "user": "Ben Stockton", "email": "ben@dealsplus.io", "organisation": "Dealsplus" },
            { "user": "Sai Padala", "email": "sai@dealsplus.io", "organisation": "Dealsplus" },
            { "user": "Matt Wallis", "email": "matt@dealsplus.io", "organisation": "Phoneix" },
        ]);
    }, []);

    function handleOnSubmitStep(e) {
        e && e.preventDefault();
        // TODO store form data in reducer.
        setActiveStep(MODEL_STATE.MEMBERS);
    }

    return (
        <>
            <div class="px-6 py-6 space-y-4 ">
                <p class="text-base leading-relaxed text-gray-900 font-bold">
                    Which you like to add anyone to new group now?
                </p>
                <span class="text-base leading-relaxed text-gray-500">
                    You can skip this and add members later if you wish
                </span>

                {/* Search Bar */}
                <SearchBar
                    searchCount={`${0} Members`}
                />

                <MemberList members={members} />

            </div>
            <ActionBar onNextClick={handleOnSubmitStep} />
        </>
    );
}

export default Members;