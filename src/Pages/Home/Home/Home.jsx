import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import Service from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;