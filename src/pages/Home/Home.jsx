import GetOffer from "./PopularBrand/PopularBrand";
import Header from "./Header/Header";
import ProductBrands from "./ProductBrands/ProductBrands";
import Delivery from "./Delivery/Delivery";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProductBrands></ProductBrands>
            <GetOffer></GetOffer>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;