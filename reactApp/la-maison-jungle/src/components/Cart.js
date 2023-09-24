
import '../Styles/Cart.css'
import ShoppingList from "./ShoppingList";
function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <ShoppingList />
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice }€
    </div>)
}
export default Cart