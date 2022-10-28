import React, { useState } from 'react';
import './style.css';


export default function LoginForm(props) {

  const [title, updateTitle] = useState(props.title)

  return (
    <>
    <h1>{title}</h1>
      <div className="container login-form-bg">
        <div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <button class="btn btn-primary" onClick={ () => { updateTitle("novo") } }>Submit</button>
        </div>
      </div>
    </>
  )
}
