import Carousel from 'react-bootstrap/Carousel'

function TestimonialCarousel({ testimonials }) {
  return (
    <section id="testimonios" className="container my-5">
      <h2>Testimonios</h2>

      <Carousel interval={2500} pause={false} indicators={true} controls={true}>
        {testimonials.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-card">
              <p>"{item.text}"</p>
              <h3>{item.name}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default TestimonialCarousel
