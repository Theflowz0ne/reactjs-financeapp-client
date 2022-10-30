import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Income from './pages/Income';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expense from './pages/Expense';
import Footer from './components/Footer';

export default function App() {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element=""/>
        <Route path="/expense" element={<Expense/>}/>
        <Route path="/income" element={<Income/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element=""/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  </>
}
