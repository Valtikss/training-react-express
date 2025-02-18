import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 shadow-md mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2025 Learn Express and React. Tous droits réservés.</p>
        <nav>
          <ul className="flex space-x-6  *:transition-transform *:duration-100 *:hover:scale-110">
            <li>
              <Link to={"/"}>Mentions légales</Link>
            </li>
            <li>
              <Link to={"/"}>Politique de confidentialité</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
