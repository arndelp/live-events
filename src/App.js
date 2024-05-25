import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import Home from "./Pages/Home";
import Billetterie from "./Pages/Billetterie";

import './App.css';


function App() {
  return (    
  <BrowserRouter>
    
      <Nav />     
        
        <Routes>
          <Route path="/" element={ 
            <Home /> }>           
          </Route>
          <Route path="/Billetterie" element={
            <Billetterie />  }>
          </Route>
          
        </Routes>
       
    
          
    <Foot />
      
    

</BrowserRouter>
   
   
    

  );
}

export default App;
