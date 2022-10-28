import './App.css';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col-xs-5"> <LoginForm /> </div>
        <div className="col"></div>
      </div>
  </div>
  )
}
