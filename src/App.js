import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import { ProductProvider } from './Stores/Context/ProductContext';
import Find from './Components/Find';
import CartProduct from './Components/CartProduct';
import SignUp from './Utils/Login/Components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login  from "./Utils/Login/Components/Login";
import MainLayer from './Layers/MainLayer';
import PublicLayout from './Layers/PublicLayout ';
import PrivateLayout from './Layers/PrivateLayout';



function App() {
  return (
    <div>

      <ProductProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path="/*" element={<PublicLayout />} />
        </Routes>
      </ProductProvider>
      <ToastContainer/>

      {/* <ProductProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/find' element={<Find />} />
          <Route path='/cart' element={<CartProduct />} />
        </Routes>
        <Footer />
      </ProductProvider>
      <ToastContainer /> */}
    </div>
  );
}

export default App;
