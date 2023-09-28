import React from "react";
import { plantList } from "../Datas/plantList"; // Import des données

function Categories({ plants,updatePlants }) {
    let categoriesSet = new Set();
    plantList.forEach((plante) => {
        categoriesSet.add(plante.category);
    });

    const categories = Array.from(categoriesSet);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        const filteredPlants = plantList.filter((plant) => plant.category === selectedCategory);
        updatePlants(filteredPlants);
    };

    return (
        <div>
            <label htmlFor="categorySelect">Sélectionnez une catégorie : </label>
            <select id="categorySelect" onChange={handleCategoryChange}>
                <option value="">-- Choisissez une catégorie --</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={()=>updatePlants(plantList)}>
                Vider
            </button>
        </div>
    );
}

export default Categories;
