import React from "react";
import data from "../data";
import "./Buttons.css";

const Buttons = ({ filterItemLoc,filterItemDay,filterItemSch, setItem, dayItems, locItems, schItems  }) => {
  return (
    <>
    <div  className=" row">
      <div className="col-lg-2 offset-lg-5" >
        <h6>Filtrer par date:</h6>
    </div>
      <div className="col-1 Drop">
        <select  >
        { dayItems.map((Val, id) => {
          
          
          return (
            <option
              className="btn-white text-black p-1 px-2 mx-5 btn fw-bold" 
              onClick={() => filterItemDay(Val)}
              key={id}
             
            >
              {Val}
            </option>
          );
        })}
        <option
          className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(data)}
          
        >
          All
        </option>    
        </select>       
      </div>
      </div>
      <div className="row">
        <div className="col-lg-2 offset-lg-5">
          <h6>Filtrer par lieu:</h6>
      </div>
      <div className="col-1 Drop">
        <select  label="Scène">
        { locItems.map((Val, id) => {
         
          return (
            <option
              className="btn-white text-black p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItemLoc(Val)}
              key={id}
              
            >
              {Val}
            </option>
          );
        })}
        <option
          className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(data)}
        >
          All
        </option>    
        </select>       
      </div>
      </div>
      <div className="row">
        <div className="col-lg-2 offset-lg-5">
          <h6>Filtrer par horaire:</h6>
      </div>
      <div className="col-1 Drop">
        <select  >
        { schItems.map((Val, id) => {
          
          
          return (
            <option
              className="btn-white text-black p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItemSch(Val) }
              key={id}
            >
              {Val}
            </option>
          );
        })}
        <option
          className="btn-white text-black p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(data)}
        >
          All
        </option>    
        </select>       
      </div>
      </div>
    </>
  );
};

export default Buttons;