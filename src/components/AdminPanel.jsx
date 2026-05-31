import { useState } from 'react'

function AdminPanel({ onAddResource }) {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    image: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.title.length < 3 || formData.body.length < 10) {
      alert('El título debe tener al menos 3 caracteres y el texto al menos 10 caracteres.')
      return
    }

    onAddResource({
      id: Date.now(),
      title: formData.title,
      body: formData.body,
      image: formData.image || 'https://images.unsplash.com/photo-1556761175-b413da4baf72'
    })

    setFormData({
      title: '',
      body: '',
      image: ''
    })

    alert('Contenido agregado correctamente.')
  }

  return (
    <section id="admin" className="container my-5">
      <h2>Panel de administración de contenido</h2>
      <p className="section-intro">
        Este mantenedor permite agregar contenido dinámico a la landing page, simulando un CMS o backoffice.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título del recurso</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="3"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            name="body"
            className="form-control"
            rows="4"
            value={formData.body}
            onChange={handleChange}
            required
            minLength="10"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL de imagen</label>
          <input
            type="url"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar contenido
        </button>
      </form>
    </section>
  )
}

export default AdminPanel
