import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

import styles from "./ContactFormEmailJS.module.css";

// AÚN NO ES FUNCIONAL

export default function ContactFormEmailJS() {
  const form = useRef();

  function focusIn(e) {
    e.target.style.border = "1px solid #503459";
    e.target.style.backgroundColor = "white";
  }

  function focusOut(e) {
    e.target.style.border = "1px solid #000";
    e.target.style.backgroundColor = "#dac9df";
  }

  async function sendEmail(e) {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        // "portafolioService",
        // "portafolio_template_1",
        form.current,
        {
          publicKey: "" /*"_NRDta8MNg0agxoFR"*/,
        }
      );

      toast.success("Su mensaje ha sido enviado. Pronto le contactaré.");
      e.target.reset();
    } catch (error) {
      toast.error("¡Oh no! Algo salió mal. Inténtelo de nuevo en una minutos.");
    }
  }

  return (
    <>
      <Toaster richColors position="bottom-center" closeButton />
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <h3>Contacto</h3>

        <label htmlFor="user_name">Nombre</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          aria-required="true"
          aria-label="Your full name"
          required
          onFocus={focusIn}
          onBlur={focusOut}
        />

        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          aria-required="true"
          aria-label="Your email address"
          required
          onFocus={focusIn}
          onBlur={focusOut}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          rows="10"
          cols="32"
          id="message"
          aria-required="true"
          aria-label="Your message"
          required
          onFocus={focusIn}
          onBlur={focusOut}
        />

        <input
          type="submit"
          value="Enviar mensaje"
          aria-label="Send your message"
        />
      </form>
    </>
  );
}
