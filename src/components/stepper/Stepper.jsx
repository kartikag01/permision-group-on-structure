import { useContext } from "react";
import PermissionGroupContext from "../store/Context";
import DoneIcon from "./DoneIcon";
import NotDone from "./NotDone";

function Stepper(props) {
    let { steps } = props;
    const { activeStep } = useContext(PermissionGroupContext);
    return (
        <div className="stepper py-6">
            <ol className="stepper-container flex justify-around">
                {
                    steps.map((step, index) => {
                        return (
                            <li key={index} className={`step flex flex-col items-center ${activeStep === index ? 'active' : ''}`}>
                                <span>{activeStep <= index ? <NotDone active={activeStep === index} number={index + 1} /> : <DoneIcon />}</span>
                                <span className={activeStep === index ? 'text-black' : 'text-gray-400'} >{step.title}</span>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    );
}

export default Stepper;