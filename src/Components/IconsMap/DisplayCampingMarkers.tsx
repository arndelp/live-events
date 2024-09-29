import React from "react"
import CampingMarkers, {locationsCamping} from "./CampingMarkers.tsx"

//Affichage conditionnel des icones en fonction de la checkbox

const DisplayCampingMarkers = () => {
    const [showResults, setShowResults] = React.useState(true)
    const handleChange  = () => setShowResults(!showResults)

    return (
        <div>
            <img src='..\assets\camping.png ' width="25em" height= "25em"/>   
            <input type="checkbox" checked={showResults} onChange={handleChange} />
            { showResults ? <Results /> : null }
        </div>
    )
  }

  const Results=() => (
    <CampingMarkers   
    pois={locationsCamping}   
    /> 
  )

export default DisplayCampingMarkers