import React from "react"
import ParkingsMarkers, {locationsParkings} from "./ParkingsMarkers.tsx"



const DisplayParkingsMarkers = () => {
    const [showResults, setShowResults] = React.useState(true)
    const handleChange  = () => setShowResults(!showResults)

    return (
        <div>
            <img src='../assets/Parking.png ' width="25rem" height= "25rem"/>   
            <input type="checkbox" checked={showResults} onChange={handleChange} />
            { showResults ? <Results /> : null }
        </div>
    )
  }

  const Results=() => (
    <ParkingsMarkers    
    pois={locationsParkings}   
    /> 
  )

export default DisplayParkingsMarkers