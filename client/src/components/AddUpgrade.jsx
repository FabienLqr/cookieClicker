import {  useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function AddUpgrade() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        cout: 0,
        multiplicateur: 0,
        image_url: ""
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
          await axios.post(`${url}/api/upgrade`, formData, {withCredentials: true});
        } catch (error) {
          console.error(error.message);
        }
      };

    return ( <><h3>Ajout</h3><form onSubmit={handleSubmit}><label htmlFor="name">Entrer le nouveau nom:</label>
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
        </form></> );
}

export default AddUpgrade;