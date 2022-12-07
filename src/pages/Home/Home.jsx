import React from 'react'
import Categories from '../../components/categories/Categories'
import Slider from '../../components/slider/Slider'
import ProductDetails from '../product-details/ProductDetails'

function Home() {
    return (
        <>
            <Slider />
            <Categories />
            <ProductDetails />
        </>
    )
}

export default Home