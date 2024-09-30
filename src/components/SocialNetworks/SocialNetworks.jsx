import React from "react";
import styles from "./SocialNetworks.module.css";

import whatsapp_icon from "/imgs/whatsapp_icon.png";
import instagram_icon from "/imgs/instagram_icon.png";

export default function SocialNetworks() {
  const linkWhatsapp = "https://wa.me/+50670544330";
  const linkInstagram = "https://www.instagram.com/cataleya_lashes_/";

  return (
    <section className={styles.socialNetworks}>
      <a href={linkWhatsapp} target="_blank" rel="noreferrer">
        <img src={whatsapp_icon} alt="ícono de whatsapp" />
      </a>

      <a href={linkInstagram} target="_blank" rel="noreferrer">
        <img src={instagram_icon} alt="ícono de instagram" />
      </a>
    </section>
  );
}
