import styles from "./concern.module.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import React, {useRef} from "react";

export default function Concern(){
    
    const sent =() => {
        Swal.fire({
            icon:"success",
            iconColor:"#31f731",
            title: "SUCCESSFUL!",
            text:"Your Concern have been sent to EOS",
            showConfirmButton: true,
            confirmButtonColor: "green",
           background: "#1b2e1b",
            border:"neon green",
            color:"white",
            padding:"5px",
            width:300
    });
}


    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_sokdorp', 'template_1hnzbco', form.current, 'A8ARn0Ya1N4dfGySM')
    }
        
    return(
        
        <div  className={styles.container}>
            <div >
                <h5>IF YOU HAVE ANY CONCERNS, 
                    JUST LEAVE A MESSAGE HERE</h5>
            </div>
            <form ref={form} onSubmit={sendEmail} >
                <div className={styles.Input}>
                <input type={styles.input} name="message"></input><br/>
                <button onClick={sent} value="Send">SEND</button>
            </div>
            </form>
            
        </div>
    )
}
