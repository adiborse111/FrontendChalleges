import { Route, Routes } from "react-router-dom"
import ProductCard from "./assets/product-preview-card-component-main/ProductCard"
import Home from "./assets/Home/Home"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ProductCard" element={<ProductCard />}/>
    </Routes>
  )
}