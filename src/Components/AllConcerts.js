import React from "react";
import { getImageUrl } from "./getImageUrl.js";


 
const AllConcerts = ({ item }) => {            
           // destructuring props
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={val.id}
              >
                <div className="card-img-top text-center">
                  <img src={getImageUrl(val)} alt={val.name} className="photo w-50" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {val.name} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {val.location}
                  </div>
                  <div className="card-text">{val.day}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default AllConcerts;
