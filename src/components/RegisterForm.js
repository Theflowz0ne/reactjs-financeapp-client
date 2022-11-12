import { request } from "../network-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [name, setName] = useState("");

    const registerUser = () => {
      if(password === repeatPassword){
        request(
          "post",
          "user/register",
          undefined, 
          {
            email: email,
            password: password,
            name: name
          }
        ).then((res) => {
          navigate("/login");
        })
        // .catch((err) => {
        //   alert(err.message);
        // })

        
      }else{
        alert("Паролите не съвпадат");
      }
    }

    return <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Име</label>
            <input type="email" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">Имейл</label>
            <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Парола</label>
            <input type="password" className="form-control" id="inputPassword" onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">Повтори парола</label>
            <input type="password" className="form-control" id="repeatPassword" onChange={(e) => {setRepeatPassword(e.target.value)}}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={registerUser}>Регистрация</button>
        </form>
      </div>
    </>
}