import { Button, Divider } from "antd";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import { LikeOutlined, LinkOutlined } from "@ant-design/icons";
import { projects } from "./data/data";
import AsideComp from "./components/AsideComp";
// import { experience} from "./data/data";

function App() {
  const isEnabled = false;
  return (
    <>
      <div className='main'>
        <HeaderComp />
        <div className='body-container'>
          <div className='left'>
            <section className='about'>
              <article>
                <h2>A propos de moi</h2>
                <p>
                Programmeur passionné et curieux, avec une base solide 
                en développement web, mobile et IA. Je cherche à 
                collaborer sur des projets réels pour développer mes 
                compétences et gagner en expérience.
                Ouvert aux collaborations — contactez-moi !
                </p>
              </article>
            </section>
            <section className='projects'>
              <h2>Mes recents projets</h2>
              <article>
                <img
                  className='featured-img'
                  src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221123132725/Top-Software-Engineering-Projects-Ideas.png'
                  alt='slug'
                />
                <div className='project-info'>
                  <h3>Peut-être un Site web de gestion de medias sociaux</h3>
                  <p>
                  Je suis un programmeur passionné par l’informatique et les 
                  technologies, toujours motivé par le désir de relever de 
                  nouveaux défis. Bien que je sois encore au début de mon 
                  parcours, j’ai déjà développé une solide base en 
                  développement web, mobile ainsi qu’en intelligence 
                  artificielle, et je suis déterminé à continuer de 
                  progresser chaque jour. Mon objectif est d’acquérir 
                  de l’expérience professionnelle tout en mettant mes 
                  compétences au service d’entreprises ou de particuliers
                   souhaitant collaborer sur des projets concrets.
                    Si vous êtes intéressé par une collaboration, n’hésitez pas à me contacter.
                  </p>
                  <div className='project-link'>
                  <Button
                      className='btn'
                      icon={<LikeOutlined />}
                      disabled={!isEnabled}
                      style={{
                        backgroundColor: isEnabled ? "#1890ff" : "#d9d9d9",
                        color: isEnabled ? "#fff" : "#999",
                        cursor: isEnabled ? "pointer" : "not-allowed",
                      }}
                      onClick={() => {
                        if (isEnabled) {
                          // Action ou redirection
                          window.open("https://ton-lien-de-soutien.com", "_blank");
                        }
                      }}
                    >
                      Soutenir mon projet
                    </Button>
                    {!isEnabled && (
                      <p style={{ fontSize: "0.9em", color: "#999", marginTop: "0.5rem" }}>
                         &nbsp;Il n’y a pas de projet à soutenir pour le moment.
                      </p>
                    )}
                  </div>
                </div>
              </article>
              <Divider style={{ backgroundColor: "#fff" }} />
              {projects.map((item, index) => {
                return (
                  <article className='article-item' key={index}>
                    <div className='left'>
                      <img src={item.image} alt='project-slug' />
                    </div>
                    <div className='right'>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a href={item.link} target='_blank' rel='noopener noreferrer'>
          <Button type='link' icon={<LinkOutlined />}>
            En savoir plus
          </Button>
        </a>
                    </div>
                  </article>
                );
              })}
            </section>

            <section className='experiences'>
              <h2>Experience professionnelle</h2>
              {/* {experience.map((item) => {
                return (
                  <article key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })} */}
            </section>
          </div>
          <AsideComp />
        </div>
        <FooterComp />
      </div>
    </>
  );
}

export default App;
