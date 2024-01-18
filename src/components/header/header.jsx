import styles from "./header.module.css";
import Links from "./Links/Links";
export const metadata = {
  title: "Blogger",
  description: "Blogger Header",
};
const Header = () => {
  const navLink = [
    {
      id: 1,
      url: "/",
      title: "Home",
    },
    {
      id: 2,
      url: "/about",
      title: "About",
    },
    {
      id: 3,
      url: "/blog",
      title: "Blog",
    },
    {
      id: 4,
      url: "/contact",
      title: "Contact",
    },
  ];
  return (
    <nav className={`${styles.navWrapper} container`}>
      <div className={styles.leftSide}>
        <p className={styles.logo}>Blogger</p>
      </div>
      <div className={styles.rightSide}>
        <Links navLink={navLink} />
      </div>
    </nav>
  );
};

export default Header;
