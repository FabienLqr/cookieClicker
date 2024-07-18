import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import argent from "../assets/images/argent.png";


const url = import.meta.env.VITE_API_URL;

function Upgrade({ cookies, setCookies, mult, setMult, id, cookie}) {

 
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/upgrade`, { withCredentials: true })
      .then((response) => {
        setUpgrades(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  }, []);

  const upgradation = async (idUpgrade, multUpgrade, cout) => {
    if (cookie < cout) {
      console.info("cookies insuffisant");
    } else {
      setCookies(cookies - cout);
      try {
        await axios.put(
          `${url}/api/player/${id}`,
          { cookie: cookies, id },
          {
            withCredentials: true,
          }
        );
        await axios.post(
          `${url}/api/achat`,
          { id_player: id, id_upgrade: idUpgrade },
          { withCredentials: true }
        );
        setMult(mult + multUpgrade);
        console.info(mult);
        await axios.put(
          `${url}/api/player/multiple/${id}`,
          { id, multiplicateur: mult },
          { withCredentials: true }
        );
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="upgrade">
      {upgrades.map((upgrade) => (
        <button
          key={upgrade.id}
          type="button"
          className="upgradeButton"
          onClick={() => upgradation(upgrade.id, upgrade.multiplicateur, upgrade.cout)}
        >
          <img src={upgrade.image_url} alt="upgrade" className="picture" />
          <div className="info">
            <h3 className="name">{upgrade.name}</h3>
            <div className="cout">
              <img
                src={argent}
                alt="un cookie en guise de money"
                className="argent"
              />
              <p className="montant">{upgrade.cout}</p>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
}

export default Upgrade;

Upgrade.propTypes = {
  cookies: PropTypes.number.isRequired,
  setCookies: PropTypes.func.isRequired,
  mult: PropTypes.number.isRequired,
  setMult: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  cookie: PropTypes.number.isRequired,
};
