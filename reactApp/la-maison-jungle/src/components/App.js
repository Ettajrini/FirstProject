import Banner from './Banner';
import Cart from './Cart';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import Categories from './Categories';  // Ajout de l'import pour Categories
import { useState } from 'react';
import { plantList } from '../Datas/plantList';

function App() {


  const [cart, updateCart] = useState([]);
 // const [listCategory, updateListCategory] = useState(categories);  // Renommé de 'ListCategory' à 'listCategory'
  const [plants, updatePlants] = useState(plantList);  // Renommé de 'updateplants' à 'updatePlants'

  return (
      <div>
        <Banner />
        <Cart cart={cart} updateCart={updateCart} />
        <Categories plants={plants} updatePlants={updatePlants} />
        <ShoppingList cart={cart} updateCart={updateCart} plants={plants} updatePlants={updatePlants} />
        <Footer />

      </div>
  );
}

export default App;
