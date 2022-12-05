import React from 'react'

function ProductItem(props) {
    const {item } = props;
    return (
        <div
            key={item.name}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
        >
            <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-black text-white p-1 rounded-full'>
                        {item.price}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ProductItem