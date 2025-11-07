export const GallerySection = ({ sectionId = "galleria" }) => (
  <section className="home-section" id={sectionId}>
    <h2 className="section-title">Galleria progetti</h2>
    <p className="section-text">
      Una raccolta delle attività, dei progetti e dei momenti che raccontano la crescita di DigiTwin Monitoring. Dalla
      sperimentazione in laboratorio ai sopralluoghi in campo, la gallery mostra il nostro impegno nel trasformare la
      teoria in pratica.
    </p>
    
  </section>
);

export const GalleryPage = () => (
  <main className="home-container">
    <GallerySection />
  </main>
);

export default GalleryPage;
