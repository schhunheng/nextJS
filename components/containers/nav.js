import React from "react";
import Link from "./../presentations/link";
import styles from './../../styles/components/containers/nav.module.css'
export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link  href="/home">Home</Link>
      <Link href="/product">Product</Link>
      <Link href="/shops">Shop</Link>
      <Link  href="/about">About</Link>
      <Link href="/contact">Contact</Link>
     
    </div>
  );
}
