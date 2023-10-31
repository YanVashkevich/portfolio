import React, {useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


export const Contact = () => {

  const ref = useRef();
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(false)

    emailjs.sendForm('service_54pitmn', 'template_0btx2fb', ref.current, 'YPT4-s2o7rYs4mFpM')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
        setIsLoading(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  }


  return (
    
    <div className="contact">
      <form ref={ref} className="form-contact" onSubmit={handleSubmit}>
        <h1 className="title-contact-us">Contact Me</h1>
        <input
          placeholder="Your Name..."
          className="input-contact-name"
          required
          type="text"
          name='name'
        />
        <input
          placeholder="bobmarli@gmail.com"
          className="input-contact-email"
          required
          type="email"
          name='email'
        />
        <textarea
          placeholder="If you want to contact me, write a message here and click Send!"
          className="textarea"
          required
          rows={10}
          name='message'
        />
        <button type="submit" className="send-btn">
          {isLoading ? 'Send' : 'Sending...'}
        </button>
        {success && <div className='text-message-sent'>Your Message Has Been Sent. Thank You!</div>}

        <div className='social-imgs'>
          <a target="_blank" href='https://www.instagram.com/yan.vashkevich/'><img className='instagram' src='./Imgs/instagram.png'/></a>
          <a target="_blank" href='https://yanvashkevich.t.me/'><img className='telegram' src='./Imgs/telegram.png'/></a>
          <a target="_blank" href='https://github.com/YanVashkevich'><img className='github' src='./Imgs/github.png'/></a>
          <a target="_blank" href='https://www.linkedin.com/in/yan-vashkevich-560628292/'><img className='linkedin' src='./Imgs/linkedin.png'/></a>
        </div>
      </form>
    </div>
  );
}
