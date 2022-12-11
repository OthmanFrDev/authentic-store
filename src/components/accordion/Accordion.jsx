import React from 'react'
import { useState } from 'react'

function Accordion() {
    const [isOpen, SetIsOpen] = useState(false);

    const toggleAccordion = () => {
        SetIsOpen(!isOpen)
    }

    return (
        <div className='w-full bg-white border-t-2 mx-auto'>
            <div className='w-full grid grid-cols-3 border-b-2 p-3' onClick={toggleAccordion}>
                <div className='col-span-2'>
                    <span className='text-xl left-0 px-2'>title</span>
                </div>
                <div className='col-span-1'>
                    <span className='text-xl float-right mr-2'>{isOpen ? "-":"+"}</span>
                </div>
            </div>
            {
                isOpen &&
                <div className='w-full block max-h-[200px] text-justify p-5'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum quisquam qui libero quas a, facilis quae eligendi ratione voluptatibus.
                        Repudiandae numquam error unde deserunt explicabo reprehenderit assumenda veritatis adipisci obcaecati?
                    </p>
                </div>
            }
        </div>
    )
}

export default Accordion