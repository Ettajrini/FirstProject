import { plantList } from '../Datas/plantList';
import '../Styles/ShoppingList.css'
import CareScale from '../components/CareScale'




function ShoppingList({ cart, updateCart ,plants, updatePlants}) {
    // updatePlants(plantList);

    return (
        <div>
            <h3>les plante a vendre</h3>
            <ul className='lmj-plant-list' >
                {plants.map((plant, index) => (

                            <li className ='lmj-plant-item' key={ plant.id } onClick={ handleClick}
                               >
                                {plant.name}

                                    {/*{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}*/}

                                {
                                    // plant.isBestSale && <span>🔥</span>
                                    //
                                    /*{plant.isBestSale ? <span>🔥</span> : null}*/}
                                <CareScale careType='water' scaleValue={plant.water} />
                                <CareScale careType='light' scaleValue={plant.light} />
                                <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>

                            </li>
                        ))}
            </ul>
        </div>
    )
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }
}
function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}
export default ShoppingList;
