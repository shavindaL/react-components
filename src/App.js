import "./App.css";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";
import ProductOverview from "./components/productOverview";

function App() {
  return (
    <div className="App font-roboto ">
      <div className="bg-black min-h-screen w-screen pb-96">
        <Navbar />
        {/* <div className="grid desktop-1920:grid-cols-4 desktop-1440:grid-cols-3 mobile-720:grid-cols-2 mobile-360:grid-cols-1 gap-10 w-95vw my-12 mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((idx) => (
            <div className="inline-block w-96 ml-auto mr-auto" key={idx}>
              <ProductCard />
            </div>
          ))}
        </div> */}
        <ProductOverview />
      </div>
    </div>
  );
}

export default App;
