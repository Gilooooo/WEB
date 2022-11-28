import styles from "./Hero.module.css";

export default function Hero() {
  return (
  <div className={styles.container}>
    <div>
        <p>We are EOs Developers from Technological University of the Philippines- Cavite Campus , We are here to give you information and services about JavaScript, CSS and HTML with all you need.</p>
    </div>
    <div className={styles.image}>
        <img src="LOGO2.png"/>
    </div>
  </div>
  );
}
