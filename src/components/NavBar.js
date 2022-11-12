import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getJwtTokenCookie } from "../utils/utils";
import { logout } from "../utils/utils";

export default function NavBar(){
    const [jwtToken, setJwtTokenInState] = useState(undefined);

    useEffect(()=>{
        const jwtTokenFromCookie = getJwtTokenCookie();
        setJwtTokenInState(jwtTokenFromCookie);
    });

    return <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">

                <NavLink className="navbar-brand" to="/">Finance APP</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Начало</NavLink>
                        </li>
                        {jwtToken && <li className="nav-item">
                            <NavLink className="nav-link" to="expense">Разходи</NavLink>
                        </li>}
                        {jwtToken && <li className="nav-item">
                            <NavLink className="nav-link" to="income">Приходи</NavLink>
                        </li>}
                        {!jwtToken && <li className="nav-item">
                            <NavLink className="nav-link" to="login">Влез</NavLink>
                        </li>}
                        {!jwtToken && <li className="nav-item">
                            <NavLink className="nav-link" to="register">Регистрация</NavLink>
                        </li>}
                        {jwtToken && <li className="nav-item">
                            <NavLink className="nav-link" to="logout">Изход</NavLink>
                        </li>}
                    </ul>
                </div>

            </div>
        </nav>
    </>
}