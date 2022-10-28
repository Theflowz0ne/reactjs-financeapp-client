import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
    <Container>
    <Row className="mt-5">
      <Col></Col>
      <Col xs={5}> <LoginForm /> </Col>
      <Col></Col>
    </Row>
  </Container>
  </div>
  )
}

export default App;
