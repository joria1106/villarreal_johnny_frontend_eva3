function NewsSection({ resources, onDeleteResource }) {
  return (
    <section id="recursos" className="container my-5">
      <h2>Recursos para emprendedores</h2>
      <p className="section-intro">
        Información administrada dinámicamente desde el panel de contenido.
      </p>

      <div className="services-grid">
        {resources.map(resource => (
          <article className="service-card" key={resource.id}>
            {resource.image && (
              <img
                src={resource.image}
                alt={`Imagen de ${resource.title}`}
                className="service-image"
                loading="lazy"
              />
            )}

            <div className="service-content">
              <h3>{resource.title}</h3>
              <p>{resource.body}</p>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDeleteResource(resource.id)}
              >
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsSection
