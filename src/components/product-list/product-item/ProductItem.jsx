import React from 'react'

function ProductItem(props) {
    const { product, selectedProduct, click } = props;
    return (
        <div className="my-4 space-y-1 m-1 w-full" onClick={click}>
            <div
                style={{
                    border: product === selectedProduct && '1px solid blue',
                    borderRaduis: product === selectedProduct && '4px',
                    backgroundColor: product === selectedProduct && 'blue',
                    color: product === selectedProduct && 'white'
                }}
                className="flex items-center p-2 mr-1 text-base font-bold text-black rounded-lg bg-white hover:bg-gray-100 group hover:shadow">
                <img src={product.img}
                    alt={product.name}
                    className='w-1/2 h-[40px] rounded-t-lg' />
                <span className="flex-1 whitespace-nowrap">{product.name}</span>
            </div>
        </div>
    )
}

export default ProductItem