import { Route, Routes } from "react-router-dom"
import ProductCard from "./assets/product-preview-card-component-main/ProductCard"
import Home from "./assets/Home/Home"
import FourCard from "./assets/four-card-feature-section-master/FourCard"
import Testimonials from "./assets/testimonials-grid-section-main/Testimonials"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ProductCard" element={<ProductCard />}/>
      <Route path="/FourCard" element={<FourCard />} />
      <Route path="/Testimonials" element={<Testimonials />} />
    </Routes>
  )
}