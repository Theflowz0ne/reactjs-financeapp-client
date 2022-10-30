import LoginForm from './components/LoginForm';
import CashForm from './components/CashForm';
import CashList from './components/CashList';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element=""/>
        <Route path="/expense" element={<CashForm/>}/>
        <Route path="/income" element={<CashList/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element=""/>
      </Routes> 
    </BrowserRouter>
  </>
}
