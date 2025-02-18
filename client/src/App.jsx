
function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-blue-500 font-bold text-primary">
        Salam mes srhab, on est le 
        <span className="text-red-500"> {new Date().toLocaleDateString()}</span>
      </h1>
    </div>
  )
}

export default App
