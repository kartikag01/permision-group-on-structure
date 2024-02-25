import { useContext } from "react";
import PermissionGroupContext from "../store/Context";
import { MODEL_STATE } from "../constants/constants";

function ActionBar(props) {
    const { onNextClick } = props;
    const { setActiveStep, activeStep } = useContext(PermissionGroupContext);

    function onPreviousClick() {
        setActiveStep(activeStep - 1);
    }

    return (
        <div class="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button onClick={onPreviousClick} data-modal-hide="default-modal" type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">{activeStep === MODEL_STATE.GROUP_NAME ? "Cancel" : "Go Back"}</button>
            <button onClick={onNextClick} data-modal-hide="default-modal" type="button" class="ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{activeStep === MODEL_STATE.MEMBERS ? "Create Group" : "Next"}</button>
        </div>
    );
}

export default ActionBar;