import { useContext } from "react";
import PermissionGroupContext from "../store/Context";
import DoneIcon from "./DoneIcon";
import NotDone from "./NotDone";

function Stepper(props) {
    let { steps } = props;
    const { activeStep } = useContext(PermissionGroupContext);
    return (
        <div className="stepper py-4 px-12 border-b border-gray-200" style={{ backgroundColor: "#FCFCFD" }}>
            <ol className="stepper-container flex justify-around relative flex-row gap-x-2">
                {
                    steps.map((step, index) => {
                        return (
                            <li key={index} className={`shrink basis-0 group items-center ${activeStep === index ? 'active' : ''} ${index === steps.length - 1 ? 'flex-0' : 'flex-1'}`}>
                                <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
                                    <span>{activeStep <= index ? <NotDone active={activeStep === index} number={index + 1} /> : <DoneIcon />}</span>
                                    <div className={`ms-2 w-full h-px bg-gray-200 group-last:hidden dark:bg-gray-700 ${index === steps.length - 1 ? 'flex-0' : 'flex-1'}`} />
                                </div>
                                <div
                                    style={{ marginLeft: -step.title.length * 2 }}
                                    className={activeStep === index ? 'text-black' : 'text-gray-400'} >
                                    {step.title}
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default Stepper;