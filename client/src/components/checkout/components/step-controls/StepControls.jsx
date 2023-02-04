import React from 'react'
import { useSelector } from 'react-redux'

export default function StepControls({ handleClick, currentStep, steps }) {

  const orderState = useSelector(state => state.order.value)
  const isUsernameFilled=orderState.orders[0].username === null || orderState.orders[0].username.trim()===''
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        onClick={() => handleClick()}
        type="button"
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        type="button"
        disabled={isUsernameFilled}
        className={`cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${isUsernameFilled ? " cursor-not-allowed opacity-50 " : ""}`}
      >
        {currentStep === steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  )
}
