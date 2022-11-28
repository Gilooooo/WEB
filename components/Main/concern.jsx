import styles from "./concern.module.css";
import swal from "sweetalert";

export default function Concern(){
    
    const sent =() => {
        swal({
            icon:"success",
            title: "SUCCESSFUL!",
            text:"Your Concern have been sent to EOS",
            showConfirmButton: true
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
