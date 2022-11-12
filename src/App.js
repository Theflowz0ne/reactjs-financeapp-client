import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Income from './pages/Income';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expense from './pages/Expense';
import RegisterForm from './components/RegisterForm';
import Logout from './components/Logout';
import Footer from './components/Footer/Index';

export default function App() {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element=""/>
        <Route path="/expense" element={<Expense/>}/>
        <Route path="/income" element={<Income/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  </>
}
