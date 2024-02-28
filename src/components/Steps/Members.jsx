import { useContext, useEffect, useState } from "react";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";
import SearchBar from "../search-bar/SearchBar";
import ActionBar from "../Actionbar/ActionBar";
import MemberList from "./members/MemberList";

function Members() {
    const { setActiveStep, members: storedMembers, setStoreMembers } = useContext(PermissionGroupContext);

    const [members, setMembers] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        fetch("/api/members")
            .then((response) => response.json())
            .then((res) => {
                const newMembers = res.data.map(_ => {
                    const storedStructure = storedMembers[_.email] || {
                        checked: false,
                        ..._ // user, email, organisation
                    };
                    return storedStructure
                });
                setMembers(newMembers);
            });
    }, []);

    function handleOnChangeMember(index, newPayload) {
        setMembers(prevData => {
            return [
                ...prevData.slice(0, index),
                {
                    ...prevData[index],
                    ...newPayload
                },
                ...prevData.slice(index + 1)
            ]
        });
    }


    function handleOnSubmitStep(e) {
        e && e.preventDefault();
        setStoreMembers(members.filter(_ => _.checked));
        setActiveStep(MODEL_STATE.HIDDEN);
        // TODO Make API call and reset the redux state to initial state.
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
                    searchCount={`${members.filter(_ => _.checked).length} Members`}
                    onSearchChange={(e) => {
                        setSearchKey(e.target.value);
                    }}
                />

                <MemberList
                    onChange={handleOnChangeMember}
                    members={members.filter((member) => {
                        return member.email.toLowerCase().includes(searchKey.toLowerCase()) ||
                            member.user.toLowerCase().includes(searchKey.toLowerCase()) ||
                            member.organisation.toLowerCase().includes(searchKey.toLowerCase());
                    })}
                />

            </div>
            <ActionBar onNextClick={handleOnSubmitStep} />
        </>
    );
}

export default Members;