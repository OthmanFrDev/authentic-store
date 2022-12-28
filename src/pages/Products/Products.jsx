import React from 'react'
import ProductsList from '../../components/product-list/Products'
import Filters from '../../components/filter/Filters'
import Checkout from '../../components/checkout/Checkout'
function Products() {
    return (
        <>
            <Filters />
            <ProductsList />
        </>
    )
}

export default Products