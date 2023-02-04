import React from 'react'
import { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

export default function Quantity(props) {

    const [isOpen, setIsOpen] = useState(false);

    const selectQuantityHandler = (e) => {
        e.preventDefault();
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className='relative flex flex-col items-center w-full h-auto rounded-lg'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Select quantity :</p>
                    <div className='flex justfiy-between flex-wrap'>
                        {
                            props.quantities.map((qte, index) => (
                                <button key={index}
                                    className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                                >
                                    {qte.quantity+" ("+qte.price+")"}
                                </button>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

