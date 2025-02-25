import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{ padding: "10px", background: "#282c34", color: "white" }}>
            <nav>
                <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
                    Accueil
                </Link>
                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                    À propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
