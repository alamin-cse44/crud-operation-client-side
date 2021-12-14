import './App.css';
import AddProducts from './components/AddProducts/AddProducts';
import ShowProducts from './components/ShowProducts/ShowProducts';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ProductUpdate from './components/ProductUpdate/ProductUpdate';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ShowProducts />} />
          <Route path="/addProduct" element={<AddProducts />} />
          <Route path="/product/update/:id" element={<ProductUpdate />} />
        </Routes>
    </div>
  );
}

export default App;
