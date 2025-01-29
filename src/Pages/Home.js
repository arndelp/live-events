import ConcertHomePage from "../Components/ConcertHomePage.js"
import Markers from "../Components/Markers.tsx"
import BannerAlert from "../Components/BannerAlert.js"
import { Link } from "react-router-dom";
import "../style/Home.css";
import "../style/Map.css";
import "../style/ConcertHomePage.css";




function Home() {

/*Fonction du bouton Billetterie */
    function Billet() {   
        return ( 
              
          <div className='col' >
            <Link to="/Billetterie">
              <button className="billet cardHover"><span className="blink" >BILLETTERIE</span></button>
            </Link>
          </div>
      
            )
      }

    return ( 
        <>
       
      <div className="row background">

          <BannerAlert />

          <h1 className="title ">NATION SOUNDS</h1>

        < div className="ConcertHomePage">
          <ConcertHomePage />
        </div>

          <Billet />

          <Link to="/Plan">
            <div className="offset-1 col-10 mapMini">
              <Markers />
            </div>
          </Link>

        </div></>
              
                
      

      
      )

}

export default Home;