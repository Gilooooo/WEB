import styles from "./Introduction.module.css";

export default function OurMission() {
  return (
    <div className={styles.container}> 
      <div className={styles.content}>
        <p>What is EO?</p>
        <h1>Web Developer</h1>
        <h5>EOs  provide  high quality of various designs made 
        on Figma  and ensuring ease of use and simplicity for your audience.
        </h5>
      </div>
      <div className={styles.footer}>
        <h5>*We provide new experience </h5>
        <h5></h5>
        <h5>*Always keep updated</h5>
        <h5>WE LOVE TO WORK WITH YOU </h5>
      </div>
      <div className={styles.image}>
        <h1>TEAMS</h1>
        <img src="Profilepic1.png" />
        <img src="Profilepic2.png" />
        <img src="Profilepic3.png" />
        <img src="Profilepic4.png" />
      </div>
     
    </div>
  );
}
