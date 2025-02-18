import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Learn Express and React</h1>
          <nav>
            <ul className="flex space-x-6 *:transition-transform *:duration-100 *:hover:scale-110">
              <li className="">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"https://youtu.be/dQw4w9WgXcQ?si=eTOmfOER4v4vRFo4"}>
                  My bitcoin wallet
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header