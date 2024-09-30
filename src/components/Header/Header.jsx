import React from "react";

import styles from "./Header.module.css";

import logo from "/imgs/logoClaro.png";

export default function Header() {
  return <img className={styles.logoHeader} src={logo} alt="logo de Cataleya Lashes" />;
}
