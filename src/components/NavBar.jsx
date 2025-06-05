import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext"
import { NavContainer } from "../styled/components/NavBarStyled";

export const NavBar = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <NavContainer>
            <div className="nav-left">
                <Link to='/Home'>Home</Link>
                <Link to='/Profile'>Profile</Link>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDark ? "☀️" : "☀️"}
            </button>
        </NavContainer>
    );
};