import React from 'react'

function FilterItem(props) {
  const { filterType, filterName } = props;
  return (
    <button
      onClick={() => filterType(filterName)}
      className='m-1 border-black-600 text-black-600 hover:bg-black hover:text-beige'
    >
      {filterName}
    </button>
  )
}

export default FilterItem;