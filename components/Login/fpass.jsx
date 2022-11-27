import styles from "./fpass.module.css";
import swal from "sweetalert";
import Swal from "sweetalert2";


export default function Fpass() {

   const Clickme =() => {
        Swal.fire({
            icon:"success",
            title: "SUCCESSFUL!",
            text:"Credentials have been updated",
            showConfirmButton: true
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
        <input type="email" />
        <button onClick={sendemail}>CODE</button>

        <h2>CODE</h2>
        <input type="CODE"/>
        <button onClick={sendcode}>CODE</button>
       
        </div>
        <div className={styles.newpass}>
        <h2>NEW PASSWORD</h2>
        <input type="new pass"/>
        <h2>CONFIRM PASSWORD</h2>\
        <input type="confirm pass"/>
        <p></p>
    
        <button onClick={Clickme}>CONFIRM</button>
        </div>
        
       
       
       
        
       

        </div>
       
       

    );
    }
