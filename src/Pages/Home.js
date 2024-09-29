import Card1 from "../Components/Card1"
import Billet from "../Components/Billet"
import MapMini from "../Components/MapMini.tsx"
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

    return ( 
        <>
        <div className="row background">
            <p id="title">Actuellement</p>
            <h1>NATION SOUND</h1>
                <Card1 />                
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