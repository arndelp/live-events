import "../style/Billetterie.css"


function Billetterie() {

    function BilletD() {   
        return ( 
              
          <div class="card card-fond">
          <div class="card-body">
            <h5 class="card-title">Billet</h5>
            <p class="card-name">D</p>
            <p class="card-text">Valable le 10/07/2027 </p>
            <a href="#" class="btn btn-danger bout">Complet</a>
          </div>
        </div>
      
            )
      }

      function BilletS() {   
        return ( 
              
          <div class="card card-fond">
          <div class="card-body">
            <h5 class="card-title">Billet</h5>
            <p class="card-name">S</p>
            <p class="card-text">Valable le 10/07/2027 </p>
            <a href="#" class="btn btn-danger bout">Complet</a>
          </div>
        </div>
      
            )
      }

      function BilletV() {   
        return ( 
              
          <div class="card card-fond">
          <div class="card-body">
            <h5 class="card-title">Billet</h5>
            <p class="card-name">V</p>
            <p class="card-text">Valable le 09/07/2027 </p>
            <a href="#" class="btn btn-primary bout">Acheter</a>
          </div>
        </div>
      
            )
      }

      function Pass2joursSD() {   
        return ( 
              
          <div class="card card-fond">
          <div class="card-body">
            <h5 class="card-title">Pass 2 jours</h5>
            <p class="card-name">SD</p>
            <p class="card-text">Valable du 10/07/2027 </p>
            <p class="card-text">au 11/07/2027</p>
            <a href="#" class="btn btn-primary">Acheter</a>
          </div>
        </div>
      
            )
      }

      function Pass2joursVS() {   
        return ( 
              
          <div class="card card-fond">
          <div class="card-body">
            <h5 class="card-title">Pass 2 jours</h5>
            <p class="card-name">VS</p>
            <p class="card-text">Valable du 09/07/2027 </p>
            <p class="card-text">au 10/07/2027</p>
            <a href="#" class="btn btn-primary">Acheter</a>
          </div>
        </div>
      
            )
      }

      function Pass3joursVSD() {   
        return ( 
              
          <div class="card card-fond">
          <div class="card-body">
            <h5 class="card-title">Pass 3 jours</h5>
            <p class="card-name">VSD</p>
            <p class="card-text">Valable du 09/07/2027 </p>
            <p class="card-text">au 11/07/2027</p>
            <a href="#" class="btn btn-primary">Acheter</a>
          </div>
        </div>
      
            )
      }





    

    return (      
<>
<div className="billetterie">
    <div className=" row ">   
   
        <div className="col-lg  col-12 bill">
            <BilletV />   
        </div>
        <div className="col-lg  col-12 bill">
            <BilletS/>   
        </div>
        <div className="col-lg  col-12 bill">
            <BilletD/>
        
        </div>
       
       </div>
    <div className="row">
    <div className="col-lg  col-12 bill">
            <Pass2joursVS/>
        </div>
        <div className="col-lg  col-12 bill">
            <Pass2joursSD/>
        </div>
        
        <div className="col-lg  col-12 bill">
            <Pass3joursVSD/>
        </div>
        </div>
</div>       
</>
    )

}

export default Billetterie;