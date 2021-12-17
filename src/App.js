import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowResults from './components/ShowResults'


const App = () => {
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data)
      console.log(res);
    })
  }, [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
  
  
  return (
    <div>
      find countries <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      <ShowResults filteredCountries={filteredCountries} setSearchFilter={setSearchFilter} />
    </div>
  )
  // return (
  //   <div>hello</div>
  // )
}

export default App