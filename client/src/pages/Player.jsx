import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function Player() {
  const [achats, setAchats] = useState([]);
  const [joueur, setJoueur] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/api/player/${id}`, { withCredentials: true })
      .then((response) => {
        setJoueur(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`${url}/api/achat/player/${id}`, { withCredentials: true })
      .then((response) => {
        setAchats(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
      });
  }, [id]);
  console.info({ achats, joueur });
  return (
    <>
      <h2>Je suis la page joueur: {joueur.pseudo}</h2>
      <table>
        <thead>
          <th>Id de l'achat</th>
          <th>nom de l'upgrade achete</th>
        </thead>
       
          {achats.map((achat) => (
            <tbody key={achat.id}>
              <td key={achat.id}>{achat.id}</td>
              <td>upgrade</td>
            </tbody>
          ))}
      
      </table>
    </>
  );
}

export default Player;
