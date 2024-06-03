
import  data  from '../../data.js'
import { getImageUrl } from "../getImageUrl.js";


export default function ListD1S1() {

  const day1sch1 = data.filter(data =>
    data.day === "10/07/2027" && data.schedule === "18:00 - 19:00");
  

  const listDay1Sch1 = day1sch1.map(data =>
    <li key={data.id} >
      
      <div className="card mb-3  " >
        <div className="row g-0">
        <div className="col-5">
       
          <img
            src={getImageUrl(data)}
            alt={data.name}  
            className="img-fluid rounded"   
          />
        </div>
      
        <div className="col-7">
          <div className="card-body ">            
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.location}</p>
              <p className="card-text">{data.day}</p>
              <p className="card-text">{data.schedule}</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </li>
        
       
  );




return ( 
<div className='row  g-0 kard'>
  <div className="card  pb-0">   
    <ul>{listDay1Sch1}</ul>
  </div>
 </div>
 )
   




}