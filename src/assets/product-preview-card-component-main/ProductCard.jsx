import myImg from './images/image-product-desktop.jpg'
import cart from'./images/icon-cart.svg';

const ProductCard = () => {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-amber-50">
      <div className="flex flex-row bg-white">
        <img className="object-contain h-96 rounded-lg" src={myImg} alt="img" />
        <div className="flex flex-col">
            <div className="p-4 ml-2 mt-2 font-light text-xs"><i>P E R F U M E</i></div>
            <div className="object-contain w-40 ml-6 mr-4 font-bold text-2xl leading-6">Gabrielle Essence Eau De Parfum</div>
            <div className="object-contain w-44 ml-6 mt-4 mr-8 font-medium text-xs text-slate-500 leading-5">
                A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.
            </div>
            <div className="ml-6 mt-6 flex flex-row">
                <div className="text-2xl font-bold italic text-green-700">$149.99</div>
                <div className="ml-4 mt-2 text-xs line-through">$169.99</div>
            </div>
            <button className="ml-6 mt-8 object-contain w-44 h-10 bg-green-700 rounded-lg hover:bg-green-950 flex flex-row justify-center items-center space-x-2">
                <img src={cart} alt="" />
                <div className="text-white text-xs font-medium">Add to Cart</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
