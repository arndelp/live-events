
import React from "react"
import BarMarkers, {locationsBars} from "./BarMarkers.tsx"



const DisplayBarMarkers = () => {
    const [showResults, setShowResults] = React.useState(true)
    const handleChange  = () => setShowResults(!showResults)

    return (
        <div>
            <img src='../assets/cocktail.png ' width="25rem" height= "25rem"/>   
            <input type="checkbox" checked={showResults} onChange={handleChange} />
            { showResults ? <Results /> : null }
        </div>
    )
  }

  const Results=() => (
    <BarMarkers    
    pois={locationsBars}   
    /> 
  )

export default DisplayBarMarkers