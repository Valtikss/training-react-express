import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full bg-yellow-400 border-b-4 border-black 
        p-4 flex items-center justify-between 
        shadow-[8px_8px_0px_#000] z-50
      "
    >
      {/* Titre animé */}
      <h1 className="
        text-2xl sm:text-3xl md:text-4xl 
        font-extrabold text-white 
        drop-shadow-[4px_4px_0px_#000] 
        animate-wiggle
      ">
        🍢 KEBABZ
      </h1>

      {/* Bouton Hamburger visible en mobile */}
      <button
        className="
          md:hidden text-white 
          text-2xl p-2 border-4 border-black rounded-xl 
          bg-black/30 
          shadow-[4px_4px_0px_#000]
        "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Navigation : masquée sur petit écran, visible à partir de md */}
      <nav
        className={`
          absolute md:static top-[70px] left-0 w-full md:w-auto 
          bg-yellow-400 md:bg-transparent 
          border-black md:border-0 border-t-4 
          transition-all duration-300 
          ${isOpen ? "block" : "hidden"} md:block
        `}
      >
        <ul 
          className="
            flex flex-col md:flex-row 
            items-start md:items-center
            md:space-x-6
            p-4 md:p-0
          "
        >
          <li className="mb-2 md:mb-0">
            <a 
              href="/" 
              className="
                bg-red-500 text-white px-4 py-2 
                rounded-xl border-4 border-black 
                shadow-[4px_4px_0px_#000] 
                hover:translate-x-[2px] hover:translate-y-[2px] 
                hover:shadow-[2px_2px_0px_#000] 
                transition-all duration-200
                block
              "
            >
              🏠 Home
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a 
              href="/about" 
              className="
                bg-blue-500 text-white px-4 py-2 
                rounded-xl border-4 border-black 
                shadow-[4px_4px_0px_#000] 
                hover:translate-x-[2px] hover:translate-y-[2px] 
                hover:shadow-[2px_2px_0px_#000] 
                transition-all duration-200
                block
              "
            >
              ℹ️ About
            </a>
          </li>
          <li>
            <a 
              href="/restaurants" 
              className="
                bg-green-500 text-white px-4 py-2 
                rounded-xl border-4 border-black 
                shadow-[4px_4px_0px_#000] 
                hover:translate-x-[2px] hover:translate-y-[2px] 
                hover:shadow-[2px_2px_0px_#000] 
                transition-all duration-200
                block
              "
            >
              🌍 Kebabiers
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
