import React from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import Description from "./components/Description/Description";

export default function App() {
  return (
    <section className={styles.homePage}>
      <Header />
      <SocialNetworks />
      <Slider />
      <Description />
    </section>
  );
}
