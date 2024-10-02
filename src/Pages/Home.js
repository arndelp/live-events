import ProgActuelle from "../Components/ProgActuelle.js"
import Billet from "../Components/Billet"
import MapMini from "../Components/MapMini.tsx"
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

    return ( 
        <>
        <div className="row background">
           
            <h1 className="title" >NATION SOUND</h1>
                <ProgActuelle />                
                <Billet /> 
                
                <Link to="/Plan" >
                    <div className="row Map">
                        <MapMini />
                    </div>
                </Link>

                </div>
                </>
                
      

      
      )

}

export default Home;