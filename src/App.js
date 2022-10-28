import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col-xs-5"> <LoginForm title="Логин1"/> </div>
        <div className="col-xs-5"> <LoginForm title="Логин2"/> </div>
        <div className="col"></div>
      </div>
  </div>
  )
}
