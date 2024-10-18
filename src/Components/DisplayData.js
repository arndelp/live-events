import { useState, useEffect } from "react";
import Card from "./Card";
import Buttons from "./Buttons";
import '../style/DisplayData.css';



export default function DisplayData() {

{/*concerts est initialement vide*/}
const [concerts, setConcerts] = useState([])
{/*envoi une requête et récupération des données dans 'dataConcerts.json' puis les stockent dans concerts avec setConcerts*/}
  useEffect(()=>{
    fetch('dataConcerts.json')
    .then(response=>response.json())
    .then(data=>setConcerts(data.concerts))
    .catch(error => console.log(error))
  },[]);

{/*Filtre des donnée */}

{/* Définition de variable */}
{/*item est vide au début */}
  const [item, setItem] = useState([]);
{/*dayItems = toutes les dates de concerts contenues dans Val. Val= tableau des données résultant de l'utilisation de la méthode map()   */}
  const dayItems = [...new Set(concerts.map((Val) => Val.day))];
{/*dayItems = toutes les scènes de concerts contenues dans Val.   */}
  const locItems = [...new Set(concerts.map((Val) => Val.location))];
{/*dayItems = toutes les heures de concerts contenues dans Val   */}
  const schItems = [...new Set(concerts.map((Val) => Val.schedule))]


  {/* Filtre par jour avec la méthode filter()*/}
   const filterItemDay = (curcat) => {
        const newItem = concerts.filter((newVal) => {
          
          return newVal.day === curcat;
        });
        setItem(newItem)
      
      };

  {/*Filtre par lieux avec la méthode filter() */}
    const filterItemLoc = (curcat2) => {
        const newItem = concerts.filter((newVal) => {
          
          return newVal.location === curcat2 
        });
        setItem(newItem)
      
      };

  {/*FIltre par horaire avec la méthode filter() */}
      const filterItemSch = (curcat3) => {
        const newItem = concerts.filter((newVal) => {
          
          return newVal.schedule === curcat3 ;
        });
        setItem(newItem)
      };
   
    
  
    
      
    
    return (        
       /* Appel de la fonction  Button en incluant les props filtre*/
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

        {/*Appel de la fonction Card en incluant les props Item */}
            </div>
            
                <Card item={item}  /> 
                
              </div>
            
          </div>
      
    
);

}