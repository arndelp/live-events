
import  data  from '../../data.js'
import { getImageUrl } from "../getImageUrl.js";

export default function ListH1() {

  const schedule1 = data.filter(concert =>
    concert.schedule === '18:00 - 19:00'
  );

  const listSchedule1 = schedule1.map(concert =>
    <li key={concert.id} >
      
      <div className="card mb-3  " >
        <div className="row g-0">
        <div className="col-5">
       
          <img
            src={getImageUrl(concert)}
            alt={concert.name}  
            className="img-fluid rounded"   
          />
        </div>
      
        <div className="col-7">
          <div className="card-body ">            
              <h5 className="card-title">{concert.name}</h5>
              <p className="card-text">{concert.location}</p>
              <p className="card-text">{concert.day}</p>
              <p className="card-text">{concert.schedule}</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </li>
        
       
  );




return       (
  <div className='row  g-0 kard'>
    <div className="card  pb-0">   
      <ul>{listSchedule1}</ul>
    </div>
  </div>
);
   



}