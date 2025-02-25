function Footer() {
    return (
        <footer style={{ padding: "10px", background: "#ddd", textAlign: "center", marginTop: "20px" }}>
            <p>&copy; {new Date().getFullYear()} Mon Projet React. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
