import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={`container ${styles.footerWrapper}`}>
        <div className={styles.leftSide}>
          <p>BLOGGER</p>
        </div>
        <div className={styles.rightSide}>
          <p>Blogger Creative Thoughts Agency &copy; All Rigths Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
