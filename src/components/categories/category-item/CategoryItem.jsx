import React from 'react'

export default function CategoryItem(props) {
    return (
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>{props.category}</p>
                <p className='px-2'>Black friday</p>
                <button className='bg-beige border-black-600 text-black hover:bg-black hover:text-beige p-2 mx-2 absolute bottom-4'>See all</button>
            </div>
            <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='/assets/gucci1.webp'
                alt='/'
            />
        </div>
    )
}
