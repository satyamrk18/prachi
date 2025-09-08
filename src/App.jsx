import {BrowserRouter, Routes,Route } from "react-router";
import "./App.css"
import Home from "./pages/Home.jsx";
import About from "./pages/about.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx"
const App = ()=>
{

  return(
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/login" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App;