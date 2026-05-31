import { useEffect, useState } from 'react'
import content from '../data/content.json'
import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import TestimonialCarousel from '../components/TestimonialCarousel'
import FaqSection from '../components/FaqSection'
import NewsSection from '../components/NewsSection'
import AdminPanel from '../components/AdminPanel'
import Footer from '../components/Footer'

const initialResources = [
  {
    id: 1,
    title: 'Programas de apoyo empresarial',
    body: 'Información sobre asesorías, capacitaciones y acompañamiento para emprendedores y PYMES.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978'
  },
  {
    id: 2,
    title: 'Herramientas digitales',
    body: 'Recursos para mejorar ventas, presencia online, administración y gestión de clientes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  {
    id: 3,
    title: 'Financiamiento y crecimiento',
    body: 'Orientación sobre fondos concursables, redes de apoyo y oportunidades para fortalecer negocios.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a'
  }
]

function Home() {
  const [selectedService, setSelectedService] = useState('')
  const [resources, setResources] = useState([])

  useEffect(() => {
    const savedResources = localStorage.getItem('resources')
    if (savedResources) {
      setResources(JSON.parse(savedResources))
    } else {
      setResources(initialResources)
    }
  }, [])

  useEffect(() => {
    if (resources.length > 0) {
      localStorage.setItem('resources', JSON.stringify(resources))
    }
  }, [resources])

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle)
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAddResource = (newResource) => {
    setResources([...resources, newResource])
    document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDeleteResource = (id) => {
    const confirmed = confirm('¿Deseas eliminar este contenido?')
    if (confirmed) {
      setResources(resources.filter(resource => resource.id !== id))
    }
  }

  return (
    <>
      <Navbar />

      <header className="hero">
        <div className="container">
          <span className="hero-badge">SERCOTEC | Centro de Negocios Santiago</span>
          <h1>Impulsamos el crecimiento de emprendedores y PYMES</h1>
          <p>
            Asesoría, capacitación y acompañamiento para fortalecer la gestión,
            innovación y sostenibilidad de los negocios.
          </p>
          <div className="hero-actions">
            <a href="#servicios" className="btn btn-light btn-lg">Ver servicios</a>
            <a href="#contacto" className="btn btn-outline-light btn-lg">Solicitar asesoría</a>
          </div>
        </div>
      </header>

      <main>
        <section id="nosotros" className="container my-5">
          <h2>Nosotros</h2>
          <p className="section-intro">
            El Centro de Negocios Santiago de SERCOTEC entrega orientación,
            capacitación y acompañamiento empresarial a micro, pequeñas y medianas
            empresas, promoviendo la innovación, la eficiencia y el crecimiento sostenible.
          </p>
        </section>

        <section className="container my-5">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>+3000</strong>
              <span>Empresas asesoradas</span>
            </div>
            <div className="stat-card">
              <strong>+500</strong>
              <span>Capacitaciones realizadas</span>
            </div>
            <div className="stat-card">
              <strong>90%</strong>
              <span>Satisfacción usuaria</span>
            </div>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Años de experiencia</span>
            </div>
          </div>
        </section>

        <section id="servicios" className="container my-5">
          <h2>Servicios</h2>
          <p className="section-intro">
            Selecciona un servicio para completar automáticamente el formulario de contacto.
          </p>

          <div className="services-grid">
            {content.services.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={handleSelectService}
              />
            ))}
          </div>
        </section>

        <TestimonialCarousel testimonials={content.testimonials} />

        <FaqSection faqs={content.faq} />

        <AdminPanel onAddResource={handleAddResource} />

        <NewsSection
          resources={resources}
          onDeleteResource={handleDeleteResource}
        />

        <ContactForm selectedService={selectedService} />
      </main>

      <Footer />
    </>
  )
}

export default Home
