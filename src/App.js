import './App.css';
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import SignIn from './Pages/Sign/SignIn';
import SignUp from './Pages/Sign/SignUp';

function App() {
  return (<div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>)
}

export default App;
