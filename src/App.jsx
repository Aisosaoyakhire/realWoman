import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SignUp from "./Pages/SignUp"
import Blogs from "./Pages/Blogs"
import LogIn from "./Pages/LogIn"
import Contact from "./Pages/Contact"
import Newsletter from "./Components/Newsletter"

    export default function App() {
      return (
     
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/signUp" element={ <SignUp/> } />
        <Route path="/logIn" element={ <LogIn/> } />
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/newsletter" element={ <Newsletter/> } />
      </Routes>
      
    
  )
}

