import styles from "./concern.module.css";
import Swal from "sweetalert2";

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
    
    return(
        
        <div  className={styles.container}>
            <div >
                <h5>IF YOU HAVE ANY CONCERNS, 
                    JUST LEAVE A MESSAGE HERE</h5>
            </div>
            <div className={styles.Input}>
                <input type={styles.input} ></input><br/>
                <button onClick={sent}>SEND</button>
            </div>
        </div>
    )
}
