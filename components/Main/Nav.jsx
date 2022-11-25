import styles from "./Nav.module.css";

export default function NAV() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      <a href="http://localhost:3000/WEB">
        <button>
        <img src = "LOGO.png"></img>
        </button>
        </a>
        </div>
      <div className={styles.navbarActions}>
        <div className={styles.login}>
        <a href="http://localhost:3000/login">
        <button>Login</button>
        </a>
        </div>
        <button>Register</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
