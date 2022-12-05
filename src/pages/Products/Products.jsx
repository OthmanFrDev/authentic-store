import React from 'react'
import ProductsList from '../../components/product-list/Products'
import Filters from '../../components/filter/Filters'
function Products() {
    return (
        <>
            <Filters />
            <ProductsList />
        </>
    )
}

export default Products