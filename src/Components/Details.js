import { getImageUrl } from "./getImageUrl2.js";
const Details= ({name, location, schedule, day, imageId}) => {    
{/*Affichage des données dans de Card */}
    return (       
                
        <div className="row g-0 pb-2">
                      <div className="card-image col-4">
                        <img src={getImageUrl({imageId})} 
                          alt={name} 
                          className="img-fluid rounded" />
                      </div>
                    <div className="col-8 ">
                    <div className="card-body g-0">
                        <h5 className="card-title" > {name}</h5> 
                        <p className="card-text" >{location}</p>  
                        <p className="card-text">{day}</p>                
                        <p className="card-text">{schedule}</p>
                    </div>
                </div>
              </div>     
      
    );

}

export default Details;