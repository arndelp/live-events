import BilletV from "../Components/Pass/BilletV"
import BilletS from "../Components/Pass/BilletS"
import BilletD from "../Components/Pass/BilletD"
import Pass2joursVS from "../Components/Pass/Pass2joursVS"
import Pass2joursSD from"../Components/Pass/Pass2joursSD"
import Pass3joursVSD from "../Components/Pass/Pass3joursVSD"
import "./Billetterie.css"


function Billetterie() {
    

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