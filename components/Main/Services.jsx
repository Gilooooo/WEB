import styles from "./Services.module.css";

export default function SERVICES() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>SERVICES</p>
        <h2>Web Design </h2>
        <h5>We promise to teach you to make a good quality design from Figma including user interface design, authoring, standardised code and proprietary software, user experience design and search engine optimization</h5>
        <h2>CSS</h2>
        <h5>In CSS,  we promise to teach you how to make unique and smooth transitions, animations, dynamic and interactive web design.</h5>
      </div>
      <div className={styles.message2}>
        <h2>JAVASCRIPT</h2>
        <h5>In Javascript, we promise to teach you from the basic  to hard javascript which includes implementation of complex features on web pages such as development of mobile app, web, desktop software and server-side applications</h5>
        <h2>HTML</h2>
        <h5>We promise to teach you  and enhance your 
            skills  on creating structure of the content on 
            websites  that includes static web pages and web applications.</h5>
      </div>
    </div>
  );
}
