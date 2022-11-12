import {useEffect, useState} from "react";
import { getJwtTokenCookie, setJwtTokenCookie } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { request } from "../../network-client";

export default function LoginForm() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {
  const jwtToken = getJwtTokenCookie();
  
  if (jwtToken) {
      navigate("/");
  }
}, []);

  const loginUser = () => {
    request(
      "post",
      "user/login",
      undefined, 
      {
        email: email,
        password: password
      }
    ).then((resp) => {
      setJwtTokenCookie(resp.data.jwtToken);
      window.location.href="/";
    });
  }

  return <>
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="inputEmail1" className="form-label">Имейл</label>
           <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword1" className="form-label">Парола</label>
          <input type="password" className="form-control" id="inputPassword1"onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={loginUser}>Влез</button>
      </form>
    </div>
  </>
}
