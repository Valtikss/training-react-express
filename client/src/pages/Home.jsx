import axios from "axios"
import { useState, useEffect } from "react"

const Home = () => {
  const [serverState, setServerState] = useState({})
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/test")
      .then((response) => setServerState(response.data.status))
      .catch((error) => console.error(error))
  }, [])
  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Bienvenue sur Mon Site</h2>
      <p className="text-lg">
        Ceci est la page d&apos;accueil où vous pouvez trouver les dernières
        mises à jour et informations.
      </p>
      <p className="mt-4">
        <strong>Test de la route /api/test:</strong>{" "}
        {serverState === "ok" ? "OK" : "KO"}
        </p>
    </main>
  )
}

export default Home
