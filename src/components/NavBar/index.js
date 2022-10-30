import { NavLink } from "react-router-dom";

export default function NavBar(){
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
                        <li className="nav-item">
                            <NavLink className="nav-link" to="expense">Разходи</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="income">Приходи</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="login">Влез</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
}