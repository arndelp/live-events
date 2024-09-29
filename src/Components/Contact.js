import "./Contact.css";
import { useState } from "react";


function MyForm() {
  const [inputs, setInputs] = useState({});

  const [textarea, setTextarea] = useState(
    
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  

  return (
     <>
      <h1 className="contacth1">Contactez-nous</h1>
     
   
    <div className="contact">    
        
      <form onSubmit={handleSubmit}>

        <label class="row field">Nom:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label>

          <label class="row field">Prénom:
          <input 
            type="text" 
            name="firstname" 
            value={inputs.firstname || ""} 
            onChange={handleChange}
          />             
          </label>

          <label class="row field">e-mail:
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />             
          </label>
      
        
          <label class="row field">message:
          <textarea value={textarea} onChange={handleChange} />   
          </label>
          

          <input type="submit" />
        </form>
      </div>
      </>
    )
  }

export default MyForm;