import { useState, useEffect } from "react";
import React from "react";
import { Carousel } from "flowbite-react";
import "../style/BannerAlert.css";



export default function BannerAlert() {

   /*alerts est initialement vide*/
   const [alerts, setAlerts] = useState([])
   /*envoi une requête et récupération des données dans la base de données puis les stockent dans alerts avec setAlertss*/
     useEffect(()=>{
       fetch(' http://127.0.0.1:8000/api/alerts ') 
       .then((response)=>response.json())
       .then(data=>setAlerts(data.member))
       .catch(error => console.log(error))
     });

/* Création du caroussel et map des données*/

  const listAlert = alerts.map(Val =>
    <div className="h-20 sm:h-20 xl:h-20 2xl:h-20">
      <Carousel slideInterval={500}>
        <div className="flex h-full items-top justify-center bg-red-600 dark:bg-gray-700 dark:text-white text-yellow-200 text-2xl animate-pulse">
          {Val.message1}
        </div>
        <div className="flex h-full items-top justify-center bg-amber-400 dark:bg-gray-700 dark:text-white text-red-600 text-2xl animate-pulse">
          {Val.message2}
        </div>        
      </Carousel>
      </div>
      
    
  )
  return (
      <>
      {listAlert}
      </>
  )
}