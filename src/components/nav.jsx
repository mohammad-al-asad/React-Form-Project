import styles from "../css/nav.module.css"

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.img}>
        <img src="./public/images/Frame 2 1.svg" alt="logo" />
      </div>
      <div>
        <ul>
            <li className={styles.active}>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
