import React from 'react'


const ShowResults = ({filteredCountries, setSearchFilter}) => {
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      return (
        <div>
          <h1>{country.name.common}</h1>
          <div>Capital city: {country.capital}</div>
          <div>Population: {country.population}</div>
          <h1>languages</h1>
         <div>{country.languages.eng}</div>
          <img src={country.flags.png} alt={country.name} width='20%'/>
         
        </div>
      )
    }
    if (filteredCountries.length > 10) return <div>Too many matches, specify another filter</div>
    return filteredCountries.map(country => {
      return (
        <div key={country.name.common}>
          {country.name.common} <button value={country.name.common} onClick={(e) => setSearchFilter(e.target.value)}>show</button>
        </div>
      )
    })
  }

export default ShowResults