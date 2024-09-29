import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import Home from "./Pages/Home";
import Billetterie from "./Pages/Billetterie";
import DisplayData from "./Components/DisplayData"
import Contact from "./Components/Contact";
import DetailDuConcert from "./Pages/DetailDuConcert";
import Plan from "./Pages/Plan";






import './App.css';



function App() {
  return (    
  <BrowserRouter>
    
      <Nav />     
        
        <Routes>
          <Route path="/" element={ 
            <Home />         }>           
          </Route>
          <Route path="/Plan" element={ 
            <Plan />         }>           
          </Route>
          <Route path="/billetterie" element={
            <Billetterie />  }>
          </Route>
          <Route path="/Programmation"  element={            
            <DisplayData /> }  >    
                       
          </Route>    
          <Route path="/Programmation/Details/:id" element={            
            <DetailDuConcert /> }>              
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
