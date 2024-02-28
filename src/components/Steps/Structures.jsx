import { useContext, useEffect, useState } from "react";
import ActionBar from "../Actionbar/ActionBar";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";
import SearchBar from "../search-bar/SearchBar";
import StructureTable from "./structures/StructureTable";

function Structures() {
    const { setActiveStep, structures: storedStructures, setStoreStructures } = useContext(PermissionGroupContext);

    const [strucutres, setStrucutres] = useState([]);
    const [roles, setRoles] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        fetch("/api/strucutres")
            .then((response) => response.json())
            .then((res) => {
                const newStrucutres = res.data.map(_ => {
                    const storedStructure = storedStructures[_] || {
                        name: _,
                        checked: false,
                        role: "No access"
                    };
                    return storedStructure
                });
                setStrucutres(newStrucutres);
            });

        fetch("/api/roles")
            .then((response) => response.json())
            .then((res) => {
                setRoles(res.data);
            });


    }, []);

    function handleOnChangeStructure(index, newPayload) {
        setStrucutres(prevData => {
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
        // TODO store form data in reducer.
        setStoreStructures(strucutres.filter(_ => _.checked) || []);
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

                <SearchBar
                    searchCount={`${strucutres.filter(_ => _.checked).length} Structures`}
                    onSearchChange={(e) => {
                        setSearchKey(e.target.value);
                    }}
                />

                <StructureTable
                    onChange={handleOnChangeStructure}
                    strucutres={strucutres.filter(_ => _.name.toLowerCase().includes(searchKey.toLowerCase()))}
                    roles={roles}
                />
            </div>
            <ActionBar onNextClick={handleOnSubmitStep} />
        </>
    );
}

export default Structures;