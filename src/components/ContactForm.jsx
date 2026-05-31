import { useState, useEffect } from 'react'

function ContactForm({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: selectedService || ''
    }))
  }, [selectedService])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.name.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.')
      return
    }

    if (formData.message.length < 10) {
      alert('El mensaje debe tener al menos 10 caracteres.')
      return
    }

    alert('Solicitud enviada correctamente. Un asesor se contactará contigo a la brevedad.')

    console.log('Datos enviados:', formData)

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contacto" className="container my-5">
      <h2>Contáctanos</h2>

      <div className="contact-info">
        <p><strong>Correo:</strong> centro.santiago@centrossercotec.cl</p>
        <p><strong>Teléfono:</strong> +56 2 0000 0000</p>
        <p><strong>Dirección:</strong> Manuel Rodríguez Sur 749, Santiago, Metro Toesca.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            required
            minLength="3"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="+56 9 1234 5678"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Servicio seleccionado</label>
          <input
            type="text"
            name="service"
            className="form-control"
            readOnly
            value={formData.service}
            placeholder="Seleccione un servicio desde las tarjetas"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            required
            minLength="10"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Enviar solicitud
        </button>
      </form>
    </section>
  )
}

export default ContactForm
