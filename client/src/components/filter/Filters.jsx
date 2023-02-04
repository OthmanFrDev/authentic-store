import React, { useState } from 'react'
import FilterItem from './filter-item/FilterItem';

function Filters() {
    const [foods, setFoods] = useState([]);
    const categories = [{ name: 'Jewerlly' }, { name: 'Shoes' }, { name: 'Bags' }];
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-black font-bold text-4xl text-center'>
                Top Rated Sell Items
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justfiy-between flex-wrap'>
                        {categories.map((cat,index) => <FilterItem key={index} filterType={filterType} filterName={cat.name} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Filters;