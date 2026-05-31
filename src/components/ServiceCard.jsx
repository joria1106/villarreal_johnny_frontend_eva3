function ServiceCard({ service, onSelectService }) {
  return (
    <article className="service-card">
      <img
        src={service.image}
        alt={`Imagen del servicio ${service.title}`}
        className="service-image"
        loading="lazy"
      />

      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <button
          className="btn btn-primary"
          onClick={() => onSelectService(service.title)}
          aria-label={`Contactar por el servicio ${service.title}`}
        >
          Contáctanos
        </button>
      </div>
    </article>
  )
}

export default ServiceCard
