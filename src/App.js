import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import Home from "./Pages/Home";
import Billetterie from "./Pages/Billetterie";
import Concerts from "./Pages/Concerts";
import Dropdown from "./Components/Dropdown";
import Contact from "./Components/Contact";




import './App.css';



function App() {
  return (    
  <BrowserRouter>
    
      <Nav />     
        
        <Routes>
          <Route path="/" element={ 
            <Home />         }>           
          </Route>
          <Route path="/billetterie" element={
            <Billetterie />  }>
          </Route>
          <Route path="/concerts" element={
            <Concerts />     }>
          </Route>
          <Route path="/Programmation" element={
            <div>
              <Dropdown />
                       
            </div>  }>
          </Route>
          <Route path="/Contact" element={
            <Contact />     }>
          </Route>
          
        </Routes>
       
    
          
    <Foot />
      
    

</BrowserRouter>
   
   
    

  );
}

export default App;
