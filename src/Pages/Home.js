import FilterD1S1 from "../Components/Filters/FilterD1S1.js"
import Billet from "../Components/Billet"
import GoogleMap from "../Components/GoogleMap.tsx"
import { Link } from "react-router-dom";
import "../style/Home.css";
import "../style/Map.css";

function Home() {

    return ( 
        <>
        <div className="row background">
           
            <h1 className="title" >NATION SOUND</h1>
                <FilterD1S1 />
                <Billet /> 
                
                <Link to="/Plan" >
                    <div className="offset-1 col-10 mapMini">
                        <GoogleMap />
                    </div>
                </Link>

                </div>
                </>
                
      

      
      )

}

export default Home;