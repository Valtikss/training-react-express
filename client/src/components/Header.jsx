import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white py-4">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold">Mini Uber Eats</h1>
                <div className="space-x-8">
                    <Link to="/" className="hover:text-gray-400">Accueil</Link>
                    <Link to="/about" className="hover:text-gray-400">A propos</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;