import React from 'react'
import { useDispatch } from "react-redux"
import { fillServiceType } from '../../../redux/preOrder'

export default function SubProductItem(props) {

    const { service } = props;

    const dispatch = useDispatch()

    const fillServiceTypeHandler = (e) => {
        dispatch(fillServiceType({ serviceType: e.target.value }))
    }

    return (
        <label className="relative cursor-pointer lg:w-1/2 sm:w-full">
            <input type="radio" className='sr-only peer' value={service.name} name="sub-product" onClick={fillServiceTypeHandler} id="post" />
            <span className='absolute top-2 right-2 z-10 transition-all opacity-0 peer-checked:opacity-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
            </span>
            <div className="lg:flex md:flex sm:flex-col items-center p-2 mr-1 text-base font-bold text-black rounded-lg bg-white ring ring-transparent peer-checked:ring-blue-500 grayscale peer-checked:grayscale-0 active:scale-95 transition-all">
                <img src={service.img}
                    alt={service.name}
                    className='w-1/2 h-[40px] mx-auto rounded-t-lg' />
                <span className="flex-1 whitespace-nowrap">{service.name}</span>
            </div>
        </label>
    )
}
