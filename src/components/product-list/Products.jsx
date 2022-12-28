import React from 'react'
import { useState } from 'react'
import ProductItem from './product-item/ProductItem'
import services from './services.json'
function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const onClickProduct = (product) => {
        setSelectedProduct(product);
    }
    return (
        <>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-2 pt-4 justify-center justify-items-center'>
                {services.products.map((product, index) => <ProductItem product={product} selectedProduct={selectedProduct} click={() => onClickProduct(product)} key={product.name} />)}
            </div>
            <br />
            {
                selectedProduct !== null &&
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-2 pt-4 justify-center justify-items-center'>
                    {selectedProduct.services.map((product, index) => <ProductItem product={product} key={product.name} />)}
                </div>
            }
        </>
    )
}

export default Products