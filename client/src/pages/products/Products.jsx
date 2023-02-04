import React from 'react'
import Filters from '../../components/filter/Filters'
import ProductsList from '../../components/product-list/Products'
function Products() {
    return (
        <>
            <Filters />
            <ProductsList />
        </>
    )
}

export default Products