
import { useState } from "react";
import data from "../data";
import Card from "./Card";
import Buttons from "./Buttons";
import './DisplayData.css';


export default function DisplayData() {
  const [item, setItem] = useState(data);

  const dayItems = [...new Set(data.map((Val) => Val.day))];

  const locItems = [...new Set(data.map((Val) => Val.location))];

  const schItems = [...new Set(data.map((Val) => Val.schedule))]

   const filterItemDay = (curcat) => {
        const newItem = data.filter((newVal) => {
          console.log(curcat)
          return newVal.day === curcat;
        });
        setItem(newItem)
      
      };

    const filterItemLoc = (curcat2) => {
        const newItem = data.filter((newVal) => {
          console.log(curcat2)
          return newVal.location === curcat2 
        });
        setItem(newItem)
      
      };

      const filterItemSch = (curcat3) => {
        const newItem = data.filter((newVal) => {
          console.log(curcat3)
          return newVal.schedule === curcat3 ;
        });
        setItem(newItem)
      };
   
    
  
    
      
    
    return (        
       
            <div className="container-fluid">
              <div className="row">
             
                <h1 className="col-12 text-center my-3 fw-bold programmationh1">Programmation</h1>

            <div className="dropdown">
                <Buttons 
                
            filterItemDay={filterItemDay} 
            filterItemLoc={filterItemLoc}
            filterItemSch={filterItemSch}
           
            setItem={setItem}
            dayItems={dayItems}
            locItems={locItems}
            schItems={schItems}
            
          />
            </div>
            
                <Card item={item}  /> 
                
              </div>
            
          </div>
      
    
);

}