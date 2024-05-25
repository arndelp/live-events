import Card1 from "../Components/Card1"
import Card2 from "../Components/Card2"
import Billet from "../Components/Billet"
import "./Home.css"

function Home() {

 
    

    return ( 
        <div className="row background">
            <p id="title">Actuellement</p>
             <h1>NATION SOUND</h1>
                <Card1 />
                <Card2 />
                <Billet /> 
                </div>
      

      
      )

}

export default Home;