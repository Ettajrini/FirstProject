import { plantList } from '../Datas/plantList';
import '../Styles/ShoppingList.css'
let categoriesSet = new Set();

plantList.forEach(plante => {
    categoriesSet.add(plante.category);
});

const categorie = [];

for (const plant of categoriesSet) {
    categorie.push(plant);
}

function ShoppingList() {
    return (
        <div>
            <h3>les plante a vendre</h3>
            <ul className='lmj-plant-list' >
                {plantList.map((plant, index) => (

                            <li className ='lmj-plant-item' key={ plant.id }>
                                {plant.name}

                                    {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}

                                {
                                    plant.isBestSale && <span>🔥</span>

                                    /*{plant.isBestSale ? <span>🔥</span> : null}*/}

                            </li>
                        ))}
            </ul>
            <h3><h3>les categories des palants </h3></h3>
            <ul>
                {categorie.map((category, index) => (
                    <li key={`${category}-${index}`}>{ category }</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;
