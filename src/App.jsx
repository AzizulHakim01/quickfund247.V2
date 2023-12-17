import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Error from "./pages/error"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
