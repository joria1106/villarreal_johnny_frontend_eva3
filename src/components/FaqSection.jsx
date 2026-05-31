function FaqSection({ faqs }) {
  return (
    <section id="faq" className="container my-5">
      <h2>Preguntas frecuentes</h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-${index}`}
              >
                {item.question}
              </button>
            </h3>

            <div
              id={`faq-${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
