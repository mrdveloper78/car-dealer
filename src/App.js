import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ProductProvider } from './Stores/Context/ProductContext';
import SignUp from './Utils/Login/Components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login  from "./Utils/Login/Components/Login";
import PublicLayout from './Layers/PublicLayout ';
import LinkToGithub from './Components/LinkToGithub';




function App() {
  return (
    <div>
      <ProductProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/aboutus' element={<LinkToGithub/>} />
          <Route path="/*" element={<PublicLayout />} />
        </Routes>
      </ProductProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
