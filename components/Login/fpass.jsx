import styles from "./fpass.module.css";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { useState } from "react";


export default function Fpass() {

    const [message,SetMessage] = useState('')
    const trythis = true;
    const check = event => {
        event.currentTarget.disabled=true;
        console.log(clickeeeeeeeeeeeeed
            )
    }

   const Clickme = () => {

        Swal.fire({
            icon:"success",
            title: "SUCCESSFUL!",
            text:"Credentials have been updated",
            showConfirmButton: true
        }).then(function(){
            window.location = "http://localhost:3000/login";
        });
    }
   
    const sendemail =() => {
            swal({
                icon:"success",
                title: "SUCCESSFUL!",
                text:"Code sent on email",
                showConfirmButton: true
        });
        

   }
    const sendcode =() => {
    swal({
        icon:"success",
        title: "SUCCESSFUL!",
        text:"Code Correct",
        showConfirmButton: true
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
        <input type="text" required/>
        <button onClick={sendemail}>CODE</button>

        <h2>CODE</h2>
        <input type="number" required/>
        <button onClick={sendcode}>CODE</button>
       
        </div>
        <div className={styles.newpass}>
        <h2>NEW PASSWORD</h2>
        <input type="new pass" required/>
        <h2>CONFIRM PASSWORD</h2>\
        <input type="text" id="message" name="message" value={message} onChange={event => SetMessage(event.target.value)}/>
        <p></p>
    
        <button disabled={!message} onClick={Clickme}>CONFIRM</button>
        </div>
        
       
       
       
        
       

        </div>
       
       

    );
    }
