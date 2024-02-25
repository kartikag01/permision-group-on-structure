import { useContext } from "react";
import ActionBar from "../Actionbar/ActionBar";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";

function PermissionGroup() {
    const { group_name, setGroup_name, setActiveStep } = useContext(PermissionGroupContext);


    function handleOnSubmitStep1(e) {
        e && e.preventDefault();
        if (group_name.length === 0) return;
        setActiveStep(MODEL_STATE.STRUCTURES);
    }

    return (
        <>
            <div class="px-16 py-6 space-y-4 ">
                <p class="text-base leading-relaxed text-gray-900 font-bold">
                    Name your permission group
                </p>

                <form onSubmit={handleOnSubmitStep1}>
                    <label for="permission_group_name" class="block mb-2 text-sm font-medium text-gray-900">Permission group name</label>
                    <input
                        onChange={(e) => setGroup_name(e.target.value)}
                        defaultValue={group_name}
                        type="text" id="permission_group_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 " placeholder="Group Name" required />
                </form>
                <p class="text-base leading-relaxed text-gray-500 my-2">
                    A descriptive name for the permission group
                </p>
            </div>
            <ActionBar onNextClick={handleOnSubmitStep1} />
        </>
    );
}

export default PermissionGroup;