
import React from "react"
import ScenesMarkers, {locationsScenes} from "./ScenesMarkers.tsx"



const DisplayScenesMarkers = () => {
    const [showResults, setShowResults] = React.useState(true)
    const handleChange  = () => setShowResults(!showResults)

    return (
        <div>
            <img src='..\assets\scene.png ' width="25em" height= "25em"/>   
            <input type="checkbox" checked={showResults} onChange={handleChange} />
            { showResults ? <Results /> : null }
        </div>
    )
  }

  const Results=() => (
    <ScenesMarkers    
    pois={locationsScenes}   
    /> 
  )

export default DisplayScenesMarkers