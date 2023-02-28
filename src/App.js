import './App.css';
import Navbar from './components/navbar';
import ProductCard from './components/productCard';

function App() {
  return (
    <div className="App font-roboto ">
      <div className='bg-black h-screen'>
        <Navbar />
        <div className='m-12'>  
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
