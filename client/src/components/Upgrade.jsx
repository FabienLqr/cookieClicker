import { useState, useEffect } from "react";
import axios from "axios";

import argent from "../assets/images/argent.png";

const url = import.meta.env.VITE_API_URL;

function Upgrade() {
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

  console.info(upgrades);
  return (
    <section className="upgrade">
      {upgrades.map((upgrade) => (
        <button key={upgrade.id} type="button" className="upgradeButton">
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

/*
{upgrades.map((upgrade) => (
  <button key={upgrade.id}>
    <h3 className="name">{upgrade.name}</h3>
    <img
      src={upgrade.image_url}
      alt="upgrade"
      className="picture"
    />
    <p className="city">{upgrade.cout}</p>
  </button>
))}
  */
