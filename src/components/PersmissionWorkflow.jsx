import { useContext } from "react";
import PermissionGroup from "./Steps/PermissionGroup";
import { MODEL_STATE } from "./constants/constants";
import Stepper from "./stepper/Stepper";
import PermissionGroupContext from "./store/Context";
import Structures from "./Steps/Structures";
import Members from "./Steps/Members";
import Entities from "./Steps/Entities";


function PersmissionWorkflow() {
    const { activeStep, setActiveStep } = useContext(PermissionGroupContext);

    function onHideClick() {
        setActiveStep(MODEL_STATE.HIDDEN);
    }


    return (
        <div id="default-modal" tabindex="-1" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <img src="./icon.svg" alt="add users" class="w-6 h-6 mx-2" />
                        <h3 class="text-xl font-semibold text-gray-900">
                            Create a new permission group
                        </h3>
                        <button onClick={onHideClick} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <Stepper
                        steps={[
                            { title: "Group Name" },
                            { title: "Structures" },
                            { title: "Entities" },
                            { title: "Members" }
                        ]}
                    />
                    {/* <!-- Modal body --> */}
                    {activeStep === MODEL_STATE.GROUP_NAME && <PermissionGroup />}
                    {activeStep === MODEL_STATE.STRUCTURES && <Structures />}
                    {activeStep === MODEL_STATE.ENTITIES && <Entities />}
                    {activeStep === MODEL_STATE.MEMBERS && <Members />}
                </div>
            </div>
        </div>
    )
}

export default PersmissionWorkflow;