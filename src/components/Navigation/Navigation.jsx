import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <header>
            <NavLink to="/">
                HOME
            </NavLink>
            <NavLink to="/movies">
                MOVIES
            </NavLink>
        </header>
    )
}