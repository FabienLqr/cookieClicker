import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function Inscription() {
  const [formData, setFormData] = useState({ 
    pseudo: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/player`, formData);
      navigate("/connexion"); // Redirige l'utilisateur vers la page d'accueil après une inscription réussie
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section id="sign-in" className="popup">
      <h2>Vous voulez vous inscrire?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Choisissez un pseudo:</label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Soumettre</button>
      </form>
      <Link to="/" className="home-btn">
        Fermer
      </Link>
    </section>
  );
}

export default Inscription;
