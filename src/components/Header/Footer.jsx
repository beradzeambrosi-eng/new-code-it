import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © All Rights Reserved | date: {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
