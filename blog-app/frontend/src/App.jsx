import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import CreatePost from "./pages/createPost/CreatePost"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Homepage /> } /> 
        <Route path="/create" element={ <CreatePost /> } />
      </Routes>
    </>
  )
}

export default App
