import React, { useState } from "react";
import data from "../data";
import AllConcerts from "./AllConcerts";
 
const Event = () => {
  const [item, setItem] = useState(data);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Tout les évènements</h1>
          <AllConcerts item={item} /> // UI Component
        </div>
      </div>
    </>
  );
};
 
export default Event;
