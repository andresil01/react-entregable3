import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import Location from './components/Location'
import CardResident from './components/CardResident'
import FilterList from './components/FilterList'
import ErrorScreen from './components/ErrorScreen'

function App() {

  const [location, setlocation] = useState()
  const [searchInput, setsearchInput] = useState("")
  const [suggestedList, setsuggestedList] = useState()
  const [hasError, sethasError] = useState(false)

  useEffect (() => {
  let id = getRandomNumber()  
  if(searchInput) {
    id= searchInput
  }

  const URL= `https://rickandmortyapi.com/api/location/${id}`

  axios.get(URL)
  .then(res => {
    sethasError(false)
    setlocation(res.data)
  })
  .catch(err => sethasError(true))

  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setsearchInput(e.target.idlocation.value)
    }

  const handleChange = e => {

    if(e.target.value === ""){
      setsuggestedList()
    }else {
      const URL=  `https://rickandmortyapi.com/api/location?name=${e.target.value}`

    axios.get(URL)
    .then(res => setsuggestedList(res.data.results))
    .catch(err => console.log(err))
    
    }
    
  }
  
    return (
    <div className="App">
      <div className='header_image'>
        <img src="https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='search'>
        <input id = "idlocation" placeholder='Enter another number form 1 to 126' type="text"
        onChange={handleChange}
        />
        <button>search</button>
        </div>
      <FilterList 
      suggestedList={suggestedList}
      setsearchInput={setsearchInput}
      setsuggestedList={setsuggestedList}
      />  
      </form>
      {
        hasError ?
        <ErrorScreen />
        :
        <>
      <Location location={location} />
      <div className='card-container'>
        {
          location?.residents.map(url => (
            <CardResident 
              key = {url}
              url = {url}
            />
          ))
        }
      </div>
      </>
      }
    </div>
  )
}

export default App
