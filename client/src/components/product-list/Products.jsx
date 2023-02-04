import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import ProductItem from './product-item/ProductItem'
import services from './services.json'
import SubProductItem from './sub-product-item/SubProductItem';
function Products() {
    const orderState = useSelector(state => state.order.value)
    const [selectedService, setSelectedService] = useState(null);
    useEffect(() => {
        if (orderState.orders[0]?.service) {
            const serviceName = orderState.orders[0]?.service
            setSelectedService(services.products.find(s => s.name === serviceName))
        }
        console.log(selectedService)
    })
    return (
        <>
            <h2 className="card-title text-center">1. Choose a service for boosting your account.</h2>
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 mx-2 pt-4 justify-center justify-items-center'>
                {services.products.map((product, index) => <ProductItem product={product} key={product.name} />)}
            </div>
            {
                selectedService !== null &&
                <div className='grid grid-cols-4 gap-4 mx-2 pt-4 justify-center justify-items-center'>
                    {selectedService?.services.map((service, index) => <SubProductItem service={service} key={service.name} />)}
                </div>
            }
        </>
    )
}

export default Products