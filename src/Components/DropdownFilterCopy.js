import Dropdown from 'react-bootstrap/Dropdown';
import "./DropdownFilter.css";
import React, { useState } from 'react';





export default function DropdownFilter() {

  


   
 
  return ( 


    
  <div className="AllDrop">
    <Dropdown>
      <Dropdown.Toggle className="DropdownItem" variant="secondary" id="dropdown-day" >
        Date
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item  >10/07/2027</Dropdown.Item>
        <Dropdown.Item >11/07/2027</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   
<Dropdown>
<Dropdown.Toggle  className="DropdownItem" variant="secondary" id="dropdown-location">
  Scène
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item >Scène 1</Dropdown.Item>
  <Dropdown.Item >Scène 2</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>

<Dropdown>
<Dropdown.Toggle className="DropdownItem" variant="secondary" id="dropdown-schredule">
  Horaire
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item >18:00 - 19:00</Dropdown.Item>
  <Dropdown.Item >19:00 - 20:00</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>

  );
}

