import React from 'react'
import Checkout from '../../components/checkout/Checkout'
import Products from '../../components/product-list/Products'
import Slider from '../../components/slider/Slider'

function Home() {
    return (
        <>
            <Slider />
            <Products />
            <Checkout />
        </>
    )
}

export default Home