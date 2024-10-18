import { useState, useEffect } from "react";
import getImageUrl from "../getImageUrl"
import { Link } from "react-router-dom";
import "../../style/Card.css";
import { all } from "axios";



export default function ListD1S1() {

  {/*concerts est initialement vide*/}
  const [concerts, setConcerts] = useState([])
{/*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/}
  useEffect(()=>{
    fetch('dataConcerts.json')
    .then(response=>response.json())
    .then(data=>setConcerts(data.concerts))
    .catch(error => console.log(error))
  },[]);


  {/*on met dans Val les concerts ayant la première date et la première horaire */}
  const day1sch1 = concerts.filter(Val =>
    Val.day === "09/07/2027" && Val.schedule === "18:00 - 19:00");  
console.log(day1sch1)

{/*on liste le contenu de Val */}
  const listDay1Sch1 = day1sch1.map(Val =>
    <li key={Val.id} >
      
      <div className="card mb-3  " >
        <div className="row g-0">
          <div className="col-5">
       
            {/*Appelle de la fonction gerImageUrl pour récupérer l'image */}
            <img
              src={getImageUrl(Val)}     
              alt={Val.name}  
              className="img-fluid rounded"   
            />
          </div>
        
          <div className="col-7">
            <div className="card-body ">            
              <h5 className="card-title">{Val.name}</h5>
              <p className="card-text">{Val.location}</p>
              <p className="card-text">{Val.day}</p>
              <p className="card-text">{Val.schedule}</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </li>
        
       
  );


 {/*Affichage de la liste + lien vers Programmation */}

return ( 

 
<Link to="/Programmation">
  <div className='row  g-0 kard'>
    <div className="card  pb-0">   
      <ul>{listDay1Sch1}</ul>
    </div>
  </div>
</Link>
)

   




}