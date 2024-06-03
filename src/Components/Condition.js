import  data  from '../data.js'
import { getImageUrl } from "./getImageUrl.js";



export default function ListD1() {

  const day1 = data.filter(data =>
    data.day === "10/07/2027"
  );

  const listDay1 = day1.map(data =>
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
}