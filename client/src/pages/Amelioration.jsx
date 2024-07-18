import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function Amelioration() {
  const [amelioration, setAmelioration] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    axios
      .get(`${url}/api/upgrade/${id}`, { withCredentials: true })
      .then((response) => {
        setAmelioration(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des joueurs :", error);
      });
  }, [id]);

  const [formData, setFormData] = useState({
    name: amelioration.name,
    description: amelioration.description,
    cout: amelioration.cout,
    multiplicateur: amelioration.multiplicateur,
    image_url: amelioration.image_url
  });

  const handleChange = (e) => {
    
    // eslint-disable-next-line prefer-const
    let { name, value } = e.target;
    if(name==='cout' || name==='multiplicateur'){
      value = parseInt(value, 10);
      console.info( name, value, typeof value);
    }
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}/api/upgrade/${id}`, formData, {withCredentials: true});
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h2>Je suis la page a propos de: </h2>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Cout</th>
          <th>Multiplicateur</th>
          <th>Image</th>
        </thead>
        <tbody>
            <td>{amelioration.id}</td>
            <td>{amelioration.name}</td>
            <td>{amelioration.description}</td>
            <td>{amelioration.cout}</td>
            <td>{amelioration.multiplicateur}</td>
            <td><img src={amelioration.image_url} alt="icone pour le bouton d'amelioration" className="imgTabAdmin" /></td>
        </tbody>
      </table>
      <form onSubmit={handleSubmit}><label htmlFor="name">Entrer le nouveau nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="description">Entrer une nouvelle description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <label htmlFor="cout">Entrer le nouveau cout:</label>
          <input
            type="number"
            id="cout"
            name="cout"
            value={formData.cout}
            onChange={handleChange}
          />
          <label htmlFor="multiplicateur">Entrer le nouveau multiplicateur:</label>
          <input
            type="number"
            id="multiplicateur"
            name="multiplicateur"
            value={formData.multiplicateur}
            onChange={handleChange}
          />
          <label htmlFor="image_url">Entrer la nouvelle image_url:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
          <button type="submit">submit</button>
          </form>
    </>
  );
}

export default Amelioration;
