import React from "react"
import ToiletsMarkers, {locationsToilets} from "./ToiletsMarkers.tsx"



const DisplayToiletsMarkers = () => {
    const [showResults, setShowResults] = React.useState(true)
    const handleChange  = () => setShowResults(!showResults)

    return (
        <div>
            <img src='../assets/toilettes.png ' width="25rem" height= "25rem"/>   
            <input type="checkbox" checked={showResults} onChange={handleChange} />
            { showResults ? <Results /> : null }
        </div>
    )
  }

  const Results=() => (
    <ToiletsMarkers    
    pois={locationsToilets}   
    /> 
  )

export default DisplayToiletsMarkers