import React, { useState, useRef } from "react"
import * as contactForm from "./contactForm.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

const ContactForm = () => {
  const form = useRef()
  return (
    <motion.div
      initial={{ scaleX: 0.5 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 1 }}
      class={contactForm.main}
    >
      <h2 class={contactForm.heading}>Contact Me 😉</h2>
      <div>
        <form
          ref={form}
          method="POST"
          class={contactForm.form}
          action="https://api.web3forms.com/submit"
        >
          <div>
            <input
              type="hidden"
              name="access_key"
              value="d70d02e9-0202-4a90-9601-f35be6d6dfc2"
            />
          </div>
          <div class={contactForm.name}>
            <input
              aria-description="name field"
              type="text"
              name="user_name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class={contactForm.email}>
            <input
              aria-description="email field"
              type="text"
              name="user_email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class={contactForm.textareaView}>
            <textarea
              aria-description="message field"
              name="message"
              id="message"
              placeholder="Message..."
            ></textarea>
          </div>
          <div></div>
          <div class={contactForm.buttonView}>
            <button type="submit" class={contactForm.button}>
              Send
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactForm
