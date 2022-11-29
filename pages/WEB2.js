import Hero from "../components/Main/Hero";
import Introduction from "../components/Main/Introduction";
import Services from "../components/Main/Services";
import styles from "../components/Main/Nav.module.css";
import Subscription from "../components/Main/Subscription";
import Concern from "../components/Main/concern";
import Footer from "../components/Main/footer";
import  { useRef } from "react";






export default function WEB2() {
  
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollIntoView({behavior:'smooth'})
  }
  
  return (

    <div>
      <div className={styles.container}>
      <div className={styles.image}>
      <a href="http://localhost:3000/WEB2">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
      <div className={styles.navbarActions}>
        <div className={styles.login}>
        <div>
            <img src="github.png"></img>
        </div>
        </div>
        <a href="http://localhost:3000/reg"><button>Register</button></a>
         <button onClick={handleClick}>Contact</button>
      </div>
    </div>     
      <Hero/>
      <Introduction/>
      <Services/>
      <Subscription/>

      <div ref={ref}><Concern/> </div>
      <Footer/>
    </div>
  );
}
