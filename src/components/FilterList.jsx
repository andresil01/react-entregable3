import React from 'react'

const FilterList = ({suggestedList, setsearchInput, setsuggestedList}) => {

  console.log(suggestedList)

  const handleClick = id => setsearchInput(id)
  function resetList () { setsuggestedList()}
 
  
  return (
    <ul className='filter'>
      {
        suggestedList?.map( location => (
            <li className="list" onClick={() => {handleClick(location.id); resetList()}} key={location.id}>{location.name}</li>
        ))
      }
      
    </ul>
  )
}

export default FilterList