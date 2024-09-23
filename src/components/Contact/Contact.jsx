import React from 'react'
import "./Contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dip2hkg', 'template_yn4r83r', form.current, 'eFwaucusKh22jjOW-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
            <MailOutlineIcon className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>muskan159k@gmail.com</h5>
                <a href='mailto:muskan159k@gmail.com'>Click to send a mail</a>
            </article>

            {/* <article className='contact__option'>
            <WhatsAppIcon className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>6353536813</h5>
                <a href='https://api.whatsapp.com/send?phone=6353536813'>Click to send a message</a>
            </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
