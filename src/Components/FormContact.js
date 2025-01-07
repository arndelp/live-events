import React, { useState, useRef }  from 'react';
import Axios from 'axios';
import "../style/FormContact.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { GoogleReCaptchaProvider , GoogleReCaptchaCheckbox} from '@google-recaptcha/react';
import { Link } from "react-router-dom";


function FormContact() {
    const navigate = useNavigate()

    //définition des variables
    const url ="http://127.0.0.1:8000/api/contacts" 

    const [data, setData] =useState({
        lastname: "",
        firstname: "",
        email: "",
        message:""         
    })

    //fonction submit utilisant le client HTTP Axios, permet le POST des data à l'url de l'api
    function submit(e){
        e.preventDefault(); //empêche la soumission du formulaire        
        Axios.post(url,{
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email,
            message: data.message
        })
        .then(res=>{
            console.log(res.data)
        })
        navigate('/Submitted')
    }

    //fonction handle: Récupération des données entrées par l'utilisateur
    function handle(e){
        const newdata={...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    


    return (
        <div class="row">
            <div class="contacth1">
                <h1>Besoin d'un renseignement?  <br></br> Contactez-nous! </h1>
            </div>
            <div >
                <form onSubmit={(e)=> submit(e)} >
                    <Form.Group className="mb-5">
                        <Form.Label className="label">Nom</Form.Label>
                        <Form.Control  className="field" onChange={(e)=>handle(e)} id="lastname" name="lastname" value={data.lastname} type="text" required></Form.Control>

                        <Form.Label className="label">Prénom</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="firstname" name="firstname" value={data.firstname} type="text" required></Form.Control>

                        <Form.Label className="label">email</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="email" name="email" value={data.email} type="email" required></Form.Control>
                       
                        <Form.Label className="label">Message</Form.Label>
                        <Form.Control className="field" onChange={(e)=>handle(e)} id="message" name="message" value={data.message} as="textarea" rows={5} required></Form.Control>
                        
                        <Form.Check className="checkRGPD " label={"En cochant cette case, je consens au traitement de mes données personnelles afin de permettre à J’ai lu de me répondre de la manière la plus pertinente et ce, conformément à la politique de confidentialité dont j’ai pris connaissance et que j’accepte sans réserve." } id={`checkBox`} required></Form.Check>
                        <Link to="/confidential">
                            <Button className="checkRGPDLink" variant="link">Lire la politique de confidentialité</Button>
                        </Link>
                       
                        {/* <GoogleReCaptchaProvider
                            type="v2-checkbox"
                            siteKey="6Ldp8a4qAAAAAO3YGheH6Ya7rSNl48r-8SS9LGKO"                                
                        >
                            <GoogleReCaptchaCheckbox
                                onChange={(token) => {
                                console.log(token);
                                }}
                                required
                        />
                        </GoogleReCaptchaProvider> */}
                    

                        <div class="submitbutton ">
                            <Button variant="secondary" size="lg" className="boutonSubmit" type='submit'>
                                Envoyer
                            </Button>
                        </div> 
                        
                        
                       
                    </Form.Group>
                </form>
            </div>
        </div>
    )
    
}
export default FormContact;