export const GallerySection = ({ sectionId = "galleria" }) => (
  <section className="home-section" id={sectionId}>
    <h2 className="section-title">Galleria progetti</h2>
    <p className="section-text">
      Una raccolta delle attività, dei progetti e dei momenti che raccontano la crescita di DigiTwin Monitoring. Dalla
      sperimentazione in laboratorio ai sopralluoghi in campo, la gallery mostra il nostro impegno nel trasformare la
      teoria in pratica.
    </p>
    <p className="section-text subtle-text">
      (Puoi inserire immagini reali dei progetti o del team, con brevi descrizioni.)
    </p>
  </section>
);

export const GalleryPage = () => (
  <main className="home-container">
    <GallerySection />
  </main>
);

export default GalleryPage;
