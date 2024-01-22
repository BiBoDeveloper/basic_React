import "./App.css"
import Transection from "./components/Transection";

function App() {
  const design = { color : "red", textAlign : "center", fontSize : "1.5rem", marginBottom :  "20px"}

  return (
    <div className="container">
        <h1 style={design}>Expense-Income Management Program</h1>
        <Transection />
    </div>
  )
}

export default App
