import React from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import loginForm from './loginForm.css'

const LoginForm = () => {
  return (
    <div className="Container">
      <Form className="m-5">
      <Form.Group as={Col} className="" controlId="formVerticalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Col} className="mb-4" controlId="formVerticalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col >
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col>
          <Button type="submit">Log In</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default LoginForm
