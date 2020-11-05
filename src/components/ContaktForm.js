import React from 'react'
import { navigate } from 'gatsby-link'


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
          <div className="col-6">
          <div className="form-group">
            <label>
              Your name:
              </label>
              <input type="text" name="name" onChange={handleChange} />
           
          </div>
          <div className="form-group">
            <label>
              Your email:
              </label>
              <input type="email" name="email" onChange={handleChange} />
            
          </div>
          <div className="form-group">
            <label>
              usługa:
              </label>
              <input type="text" name="usluga" onChange={handleChange} />
            
          </div>
          <div className="desctop">
          <div className="form-group">
            <button type="submit">Wyślij wiadomość</button>
          </div>
          </div>
          
          </div>
          <div className="col-6">
          <div className="form-group">
            <label>
              Message:
              </label>
              <textarea name="message" onChange={handleChange} />
            
          </div>
          <div className="mobile">
          <div className="form-group">
            <button type="submit">Wyślij wiadomość</button>
          </div>
          </div>
         
          </div>
        </div>
        
        
        
      </form>
  )
}