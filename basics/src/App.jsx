import Greet from "./components/Greet";
import Home from "./Home";
function App() {
    return (
    <>
    <Home name = "Priya" />
    <Home age = {33} /> 
    <Greet />
    </>
  )
} 

export default App;