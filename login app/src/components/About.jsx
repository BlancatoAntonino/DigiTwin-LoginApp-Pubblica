export const ChiSiamoSection = ({ sectionId = "chi-siamo" }) => (
  <section className="home-section" id={sectionId}>
    <h2 className="section-title">Chi siamo</h2>
    <p className="section-text">
      DigiTwin Monitoring nasce come iniziativa studentesca del Politecnico di Torino, composta da un gruppo di
      studenti e ricercatori appassionati di innovazione, tecnologia e digitalizzazione del costruito.
    </p>
    <p className="section-text">
      Lavoriamo insieme per progettare, testare e applicare soluzioni che uniscono sensori fisici e modelli digitali,
      trasformando i dati raccolti in strumenti concreti per la gestione e la manutenzione delle strutture.
    </p>
    <p className="section-text">I nostri valori fondamentali guidano ogni progetto che realizziamo:</p>
    <ul className="values-grid">
      <li>💡 Innovazione</li>
      <li>📚 Formazione</li>
      <li>🌱 Sostenibilità</li>
      <li>🤝 Collaborazione</li>
      <li>✅ Affidabilità</li>
      <li>🌍 Impatto sociale</li>
    </ul>
  </section>
);

const AboutPage = () => (
  <main className="home-container">
    <ChiSiamoSection sectionId="chi-siamo" />
  </main>
);

export default AboutPage;
