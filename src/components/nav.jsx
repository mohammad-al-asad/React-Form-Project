import styles from "../css/nav.module.css"

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.img}>
        <img src="./Frame 2 1.svg" alt="logo" />
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li className={styles.active}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
