import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/home';
import Product from './pages/product';
import Services from './pages/services';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import Register from './pages/register';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='register' element={ <Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>

      <Footer/>
     
      
    </div>
  );
}

export default App;
