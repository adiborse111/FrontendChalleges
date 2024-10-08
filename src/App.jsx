import { Route, Routes } from "react-router-dom";
import {
  FourCard,
  Home,
  ProductCard,
  ResultSummary,
  SignupForm,
  Testimonials,
  MortageRepayment,
  NFTcard,
  TipCalculator,
  Advice,
  IntroDropdown,
  ProductListCart,
  SunnysideLanding,
} from "./assets";
import Home2 from "./assets/Home/Home2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/ProductCard" element={<ProductCard />} />
      <Route path="/FourCard" element={<FourCard />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/SignupForm" element={<SignupForm />} />
      <Route path="/ResultSummary" element={<ResultSummary />} />
      <Route path="/MortageRepayment" element={<MortageRepayment />} />
      <Route path="/NFTcard" element={<NFTcard />} />
      <Route path="/TipCalculator" element={<TipCalculator />} />
      <Route path="/AdviceGenerator" element={<Advice />} />
      <Route path="/IntroSectionDropdown" element={<IntroDropdown />} />
      <Route path="/ProductListCart" element={<ProductListCart />} />
      <Route path="/SunnysideLanding" element={<SunnysideLanding />} />
    </Routes>
  );
}
