import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Error from "./pages/error"
import LongTerm from "./pages/LongTerm"
import SbaLoan from "./pages/SbaLoan"
import ShortTerm from "./pages/ShortTerm"
import Loc from "./pages/Loc"
import Equipment from "./pages/Equipment"
import WorkingCap from "./pages/WorkingCap"
import Faq from "./pages/Faq"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Contact from "./pages/Contact"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/long-term" element={<LongTerm/>}/>
          <Route path="/sba" element={<SbaLoan/>}/>
          <Route path="/loc" element={<Loc/>}/>
          <Route path="/equipment" element={<Equipment/>}/>
          <Route path="/short-term" element={<ShortTerm/>}/>
          <Route path="/working-capital" element={<WorkingCap/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
