import styles from "./fpass.module.css";
import Swal from "sweetalert2";
import { useState } from "react";


export default function Fpass() {

    const [message,SetMessage] = useState('')
    const [email,SetEmail] = useState('')
    const [number,SetNumber] = useState('')
    const [npass,SetNpass] = useState('')
    

   const Clickme = () => {

        Swal.fire({
            icon:"success",
            iconColor:"#31f731",
            title: "SUCCESSFUL!",
            text:"Credentials have been updated",
            showConfirmButton: true
            ,
            confirmButtonText:"OK",
            confirmButtonColor: "green",
            background: "#1b2e1b",
            border:"neon green",
            color:"white",
            padding:"5px",
            width:300

        }).then(function(){
            window.location = "http://localhost:3000/login";
        });
    }
   
    const sendemail =() => {
            Swal.fire({
                icon:"success",
                iconColor:"#31f731",
                title: "SUCCESSFUL!",
                text:"Code sent on email",
                showConfirmButton: true,
                confirmButtonText:"OK",
                confirmButtonColor: "green",
            background: "#1b2e1b",
            border:"neon green",
            color:"white",
            padding:"5px",
            width:300
        });
        

   }
    const sendcode =() => {
    Swal.fire({
        icon:"success",
        iconColor:"#31f731",
        title: "SUCCESSFUL!",
        text:"Code Correct",
        showConfirmButton: true,
        confirmButtonText:"OK",
            confirmButtonColor: "green",
            background: "#1b2e1b",
            border:"neon green",
            color:"white",
            padding:"5px",
            width:300
});


}

   

    return(
        
        <div className={styles.container}>
        <div className={styles.image}>
        <a href="http://localhost:3000/WEB">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
        
        <div className={styles.pass}>
        <h2>EMAIL</h2>
        <input type="text" id="email" name="email" value={email} onChange={event => SetEmail(event.target.value)}/>
        <button onClick={sendemail}>CODE</button>

        <h2>CODE</h2>
        <input type="number" id="number" name="number" value={number} onChange={event => SetNumber(event.target.value)}/>
        <button onClick={sendcode}>CODE</button>
       
        </div>
        <div className={styles.newpass}>
        <h2>NEW PASSWORD</h2>
        <input type="password" id="npass" name="npass" value={npass} onChange={event => SetNpass(event.target.value)}/>
        <h2>CONFIRM PASSWORD</h2>\
        <input type="password" id="message" name="message" value={message} onChange={event => SetMessage(event.target.value)}/>
        <p></p>
    
        <button disabled={!message || !email || !number || !npass} onClick={Clickme}>CONFIRM</button>
        </div>
        
       


        </div>
       
       

    );
    }
