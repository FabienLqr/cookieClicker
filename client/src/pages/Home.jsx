import { useAuth } from "../context/AuthContext";

import Upgrade from "../components/Upgrade";

import argent from "../assets/images/argent.png";

function Home() {
  const { player } = useAuth();
  console.info(player);
  return (
    <>
      <h2>{player.pseudo}: <img src={argent} alt="un cookie en guise de money" className="argent"/><em>{player.cookie}</em></h2>
      <img src={argent} alt="le cookie a clicker" className="cookie"/>{" "}
      <Upgrade />
    </>
  );
}

export default Home;
