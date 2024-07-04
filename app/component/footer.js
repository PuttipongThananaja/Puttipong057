// app/components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <p>ต้มยำกุ้ง อร่อยเกินไปครับ</p>
      </footer>
    </>
  );
}
