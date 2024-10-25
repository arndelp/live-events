import ConcertHomePage from "../Components/ConcertHomePage.js"
import GoogleMap from "../Components/GoogleMap.tsx"
import { Link } from "react-router-dom";
import "../style/Home.css";
import "../style/Map.css";

function Home() {

{/*Fonction du bouton Billetterie */}
    function Billet() {   
        return ( 
              
          <div className='col' data-testId="boutonBilletterie">
            <Link to="/Billetterie">
              <button className="billet cardHover"><span className="blink" >BILLETTERIE</span></button>
            </Link>
          </div>
      
            )
      }

    return ( 
        <>
        <div className="row background">
           
            <h1 className="title " >NATION SOUND</h1>
            
                <ConcertHomePage />
              
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