import CartList from "./components/CartList"
import DessertList from "./components/DessertList"

const ProductListCart = () => {
  return (
    <div className="flex flex-row bg-yellow-50 px-52 py-20">
        <DessertList />   
        <CartList />
    </div>
  )
}

export default ProductListCart