import React, { useState }from 'react'
import AccountInformations from './components/steps/AccountInformations';
import Payment from './components/steps/Payment';
import Final from './components/steps/Complete';
import StepControls from './components/step-controls/StepControls';
import Stepper from './components/stepper/Stepper';

export default function Checkout() {

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        "Information",
        "Payment",
        // "Complete",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <AccountInformations />;
            case 2:
                return <Payment />;
            // case 3:
            //     return <Final />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep >= 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='grid grid-cols-6 gap-4 mx-2 p-2'>
            <div className='col-start-1 col-end-7 md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-4   w-full  bg-white rounded-lg shadow-xl'>
                <div className="horizontal container mt-5 ">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                        {/* <UseContextProvider>{displayStep(currentStep)}</UseContextProvider> */}
                    </div>
                </div>
                {/* navigation button */}
                {currentStep !== steps.length && (
                    <StepControls
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
        </div>
    )
}
