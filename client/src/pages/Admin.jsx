import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AddUpgrade from "../components/AddUpgrade";

const url = import.meta.env.VITE_API_URL;

function Admin() {
  const [players, setPlayers] = useState([]);
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/player`, { withCredentials: true })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/api/upgrade`, { withCredentials: true })
      .then((response) => {
        setUpgrades(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
      });
  }, []);

  return (
    <>
      <h2>Administration</h2>
      <section className="adminSection">
        <article className="box">
          <h3>Joueurs</h3>
          {players.map((player) => (
            <Link to={`/player/${player.id}`} key={player.id}>
              <p key={player.id}>{player.pseudo}</p>
            </Link>
          ))}
        </article>
        <article className="box">
          <h3>Amelioration</h3>
          {upgrades.map((upgrade) => (
            <Link to={`/amelioration/${upgrade.id}`} key={upgrade.id}>
              <p key={upgrade.id}>{upgrade.name}</p>
            </Link>
          ))}
        </article>
      </section>
      <AddUpgrade />
    </>
  );
}

export default Admin;
