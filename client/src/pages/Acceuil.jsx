import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <>
      <h2>Bienvenue</h2>
      <section>
        <article className="blockPresentation">
          <h2>Comment jouer?</h2>
          <p className="presentation">
            Pour jouer c'est tres simple, il suffit de se creer un compte et de
            se connecter. Une fois connecter, plus qu'a appuyer sur le cookie
            geant en plein milieu de la page ! A chaque click, votre nombre de
            cookie augmentera. Au debut seulement un part un, pour avoir plus de
            cookies par click, il y a differentes amelioration qui augmente le
            nombre de cookies.
          </p>

          
        </article>
        <article className="blockBouton">
        <Link to="/connexion" className="pasDeco">
            <button type="button" className="upgradeButton">
              Connexion{" "}
            </button>
          </Link>
          <Link to="/inscription" className="pasDeco">
            <button type="button" className="upgradeButton">
              Inscription
            </button>
          </Link>
        </article>
      </section>
    </>
  );
}

export default Acceuil;
