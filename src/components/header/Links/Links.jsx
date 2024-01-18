"use client";
import styles from "../header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({ navLink }) => {
  const pathName = usePathname();
  return (
    <>
      <div className={styles.rightSide}>
        {navLink.map((item) => {
          return (
            <Link
              href={item.url}
              className={`${styles.linkContainer} ${
                pathName === item.url && styles.active
              } `}
            >
              {item.title}
            </Link>
          );
        })}
        <button className={styles.btn}>Logout</button>
      </div>
    </>
  );
};

export default Links;
