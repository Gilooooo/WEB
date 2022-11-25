import styles from "./Nav.module.css";

export default function NAV() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="LOGO.png" />
      </div>
      <div className={styles.navbarActions}>
        <button>Login</button>
        <button>Register</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
