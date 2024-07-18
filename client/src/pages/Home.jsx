import { useState } from "react";
import axios from "axios";

import { useAuth } from "../context/AuthContext";
import Upgrade from "../components/Upgrade";

import argent from "../assets/images/argent.png";

const url = import.meta.env.VITE_API_URL;

function Home() {
  const { player } = useAuth();
  const { cookie, id, multiplicateur } = player;
  const [cookies, setCookies] = useState(cookie);

  const moreCookie = async () => {
    setCookies(cookies + 1 * multiplicateur);

    try {
      await axios.put(
        `${url}/api/player/${player.id}`,
        { cookie: cookies, id },
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>
        {player.pseudo}:{" "}
        <img
          src={argent}
          alt="un cookie en guise de money"
          className="argent"
        />
        <em style={{paddingLeft: ".5rem"}}>{cookies}</em>
      </h2>
      <button type="button" className="moreCookie" onClick={moreCookie}>
        <img src={argent} alt="le cookie a clicker" className="cookie" />
      </button>{" "}
      <Upgrade />
    </>
  );
}

export default Home;
