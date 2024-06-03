import { useState } from "react";
import "./Dropdown.css";
import Condition from "./Condition";




export default function Program() {
  
  const [day , setDay] = useState('All')
  const [location, setLocation] = useState('All')
  const [schedule, setSchedule]= useState('All')
 
  
 
   
  


  function changeDay(event1){    
    setDay(event1.target.value)
  }
  function changeLocation(event2){
    setLocation(event2.target.value)
  }
  function changeSchedule(event3){
    setSchedule(event3.target.value)
  }
 
  
        
    
  return (
    <div>
    <div className="AllDrop">
      
      
      <select  value={day} onChange={changeDay} className="DropdownItem">
        <option value="none">Jour</option>
        <option value="10/07/2027">10/07/2027</option>
        <option value="11/07/2027">11/07/2027</option>
      </select>
      <select value={location} onChange={changeLocation} className="DropdownItem">
        <option value="none">Scène</option>
        <option value="Scène 1">Scène 1</option>
        <option value="Scène 2">Scène 2</option>
      </select>
      <select value={schedule} onChange={changeSchedule} className="DropdownItem">
        <option value="none">Horaire</option>
        <option value="18:00 - 19:00">18:00 - 19:00</option>
        <option value="19:00 - 20:00">19:00 - 20:00</option>
      </select>
     
      <div className='row  g-0 kard'>
        <div className="card  pb-0">
     
        </div>
       
      </div>
    
    </div>
   <div>
    <Condition date={day} lieu={location} horaire={schedule}  />
   </div>
    </div>
  );
  
}

