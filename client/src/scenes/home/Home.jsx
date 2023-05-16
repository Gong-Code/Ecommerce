import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";


const Home = () => {
    return <div className="name">
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
    </div>

}

export default Home;