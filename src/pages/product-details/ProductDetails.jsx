import React from 'react'
import ProductDescription from '../../components/product-description/ProductDescription'

function ProductDetails() {
    return (
        <>
            <div className="w-full hidden md:grid lg:grid grid-cols-2 gap-0">
                <div>
                    <img className='w-full h-[400px] object-cover' src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' />
                </div>
                <div>
                    <img className='w-full h-[400px] object-cover' src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' />
                </div>
                <div>
                    <img className='w-full h-[400px] object-cover' src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' />
                </div>
                <div>
                    <img className='w-full h-[400px] object-cover' src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60' />
                </div>
            </div>

            <ProductDescription />
        </>
    )
}

export default ProductDetails