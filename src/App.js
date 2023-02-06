import './App.css';
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import SignIn from './Pages/Sign/SignIn';
import SignUp from './Pages/Sign/SignUp';
import Product from './Pages/Product/Product';
import About from './Pages/About/About';
import Article from './Pages/Article/Article';
import Recomendation from './Pages/Reacomendation/Recomendation';
import Contact from './Pages/Contact/Contact';

function App() {
  return (<div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/reacomendation' element={<Recomendation/>}/>
      </Routes>
      <Footer/>
    </div>)
}

export default App;
