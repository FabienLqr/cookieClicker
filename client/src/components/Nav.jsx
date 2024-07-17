import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

function Nav() {
  const { isAuthenticated, player } = useAuth();

  return (
    <>
      <nav aria-label="Navigation">
        <ul>
          {isAuthenticated &&
            player.role_id === 1 && ( // Affiche "Admin" seulement pour les admins
              <Link to="/admin">Admin</Link>
            )}
        </ul>
        <ul className="log-nav">
          {!isAuthenticated ? (
            <>
              <Link to="/acceuil">Acceuil</Link>
              <Link to="/connexion">Connexion</Link>
              <Link to="/inscription">Inscription</Link>
            </>
          ) : (
            <>
              <Link to="/">Game</Link>
              <Link to="/deconnexion">Deconnexion</Link>
            </>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Nav;
