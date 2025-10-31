export const EventsSection = ({ sectionId = "eventi" }) => (
  <section className="home-section" id={sectionId}>
    <h2 className="section-title">Eventi e collaborazioni</h2>
    <p className="section-text">
      Partecipiamo regolarmente a conferenze, workshop e seminari legati al mondo del BIM, dell’ingegneria strutturale
      e della digitalizzazione. Gli eventi sono occasioni di scambio e formazione, dove studenti, professionisti e
      docenti possono confrontarsi e condividere esperienze.
    </p>
  </section>
);

export const EventsPage = () => (
  <main className="home-container">
    <EventsSection />
  </main>
);

export default EventsPage;
