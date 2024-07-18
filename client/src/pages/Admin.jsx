import { useEffect, useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function Admin() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/player`, { withCredentials: true })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des joueurs :",
          error
        );
      });
  }, []);

  console.info({players});
  return (
    <>
      <h2>Administration</h2>
      <p>la nav d'admin</p>
    </>
  );
}

export default Admin;
