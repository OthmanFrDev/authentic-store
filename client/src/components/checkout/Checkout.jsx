import React, { useState } from 'react'
import AccountInformations from './components/steps/AccountInformations';
import Payment from './components/steps/Payment';
import StepControls from './components/step-controls/StepControls';
import Stepper from './components/stepper/Stepper';
import AccountView from './components/steps/AccountView';
import ProductItem from '../product-list/product-item/ProductItem';
import { useSelector, useDispatch } from 'react-redux';

export default function Checkout() {
    // const order = useSelector(state => state.value)
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const onClickProduct = (product) => {
        setSelectedProduct(product);
        console.log(" test ", selectedProduct)
    }
    const steps = [
        "Username",
        "Account",
        "Payment",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <AccountInformations />;
            case 2:
                return <AccountView />;
            case 3:
                return <Payment />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='grid grid-cols-6 gap-4 mx-2 p-2'>
            <form className='col-start-1 col-end-7 md:col-start-2 md:col-span-4 lg:col-start-2 lg:col-span-4   w-full  bg-white rounded-lg shadow-xl'>
                {
                    selectedProduct !== null && currentStep === 2 &&
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-2 pt-4 justify-center justify-items-center'>
                        {selectedProduct.services.map((product, index) => <ProductItem product={product} key={product.name} onSelectMainProduct={onClickProduct} />)}
                    </div>
                }
                <div className="horizontal container mt-5">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-5 ">
                        {displayStep(currentStep)
                        }                        {/* <UseContextProvider>{displayStep(currentStep)}</UseContextProvider> */}
                    </div>
                </div>
                {/* navigation button */}
                {currentStep !== steps.length + 1 && (
                    <StepControls
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </form>
        </div>
    )
}
