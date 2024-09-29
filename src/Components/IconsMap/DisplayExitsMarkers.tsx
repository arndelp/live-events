import React from "react"
import ExitsMarkers, {locationsExits} from "./ExitsMarkers.tsx"



const DisplayExitsMarkers = () => {
    const [showResults, setShowResults] = React.useState(true)
    const handleChange  = () => setShowResults(!showResults)

    return (
        <div>
            <img src='..\assets\entrer.png ' width="25em" height= "25em"/>   
            <input type="checkbox" checked={showResults} onChange={handleChange} />
            { showResults ? <Results /> : null }
        </div>
    )
  }

  const Results=() => (
    <ExitsMarkers   
    pois={locationsExits}   
    /> 
  )

export default DisplayExitsMarkers