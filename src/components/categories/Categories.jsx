import React from 'react'
import CategoryItem from './category-item/CategoryItem'

export default function Categories() {

    const categories=['Bags','Men','Jewerlly']
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
           {categories.map(cat=><CategoryItem key={cat} category={cat}/>)}
        </div>
    )
}
