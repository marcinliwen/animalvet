import React from 'react'
import { navigate } from 'gatsby-link'
import { useKontaktInfo } from "../hooks/kontakt-hook"

import phone from "../images/phone-call.svg"
import whatsapp from "../images/whatsapp.svg"
import messenger from "../images/messenger.svg"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  const { whatsup_number }  = useKontaktInfo();
  const wiadomosc = "Dzień dobry, chciałbym umówić się na wizytę";

  return (
  
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="row">
          <div className="col-12 kontakt-header">
            <h3 style={{marginBottom:"0px"}}>Umów się na wizytę</h3>
            <a className="kontakt-link" href={`tel:${whatsup_number}`} target="_blank">{/*<span><img src={phone} width="18px" height="18px"/></span> */}<p>+48 506 109 445</p></a>
            <a className="kontakt-link" href={`http://wa.me/${whatsup_number}/?text=${wiadomosc}`} target="_blank">{/*<span><img src={whatsapp} width="18px" height="18px"/></span> */}<p>Whats up!</p></a>
            <a className="kontakt-link" href="http://m.me/1331193130342453" target="_blank">{/*<span><img src={messenger} width="18px" height="18px"/> </span>*/}<p>Messenger</p></a>
            <p>lub napisz do nas jak możemy pomóc Twojemu pupilowi.</p>            
          </div>
          <div className="col-6">
          <div className="form-group form__border">
            <label>
              Imię :
              </label>
              <input type="text" name="name" onChange={handleChange} />
           
          </div>
          <div className="form-group form__border">
            <label>
              E-mail:
              </label>
              <input type="email" name="email" onChange={handleChange} />
            
          </div>
          <div className="form-group form__border">
            <label>
              Telefon:
              </label>
              <input type="text" name="telefon" onChange={handleChange} />
            
          </div>
          <div className="desctop">
          <div className="form-group">
            <button type="submit">Wyślij wiadomość</button>
          </div>
          </div>
          
          </div>
          <div className="col-6">
          <div className="form-group form__border">
            <label>
              Wiadomość:
              </label>
              <textarea name="message" onChange={handleChange} />
            
          </div>
          <div className="mobile">
          <div className="form-group ">
            <button type="submit">Wyślij wiadomość</button>
          </div>
          </div>
         
          </div>
        </div>
        
        
        
      </form>
  )
}