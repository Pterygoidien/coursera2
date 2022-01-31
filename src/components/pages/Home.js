import "../../scripts/scss/pages/home.scss";
const Home = () => {
  return (
    <main>
      <section className="showcase">
        <div className="container flex-row flex-nowrap">
          <div className="showcase__text">
            <h1 className="text-5xl font-semibold mb-8">
              Apprennez sans limites
            </h1>
            <p>
              Développez de nouvelles compétences pour ce sentiment "c'est mon
              année" avec des cours, des certificats et des diplômes
              d'universités et d'entreprises de classe mondiale
            </p>
            <button className="box-border bg-blue-800 border-2 border-blue-800 rounded py-2 px-4 font-medium text-white">
              Inscrivez-vous gratuitement
            </button>
            <button className="box-border border-blue-800 border-2 rounded py-2 px-4 font-medium">
              Essayez Coursera pour les affaires
            </button>
          </div>
          <div className="showcase__image collapse-md">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/f5c7eb90291561ae112d6c302c8fd16c/NYCampaign_HeaderImage_Paulina_918x992.png?auto=format%2Ccompress&dpr=2&w=459&h=497&q=40"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
