
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Academics from './pages/Academics/Academics'
import Admissions from './pages/Admissions/Admissions'
import StudentLife from './pages/StudentLife/StudentLife'
import Contact from './pages/Contact/Contact'
import { NavLinks } from './components/Data/NavLinks'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <NavBar Logo={"/assest/images/Nav/Logo.png"} links={NavLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/atudentLife" element={<StudentLife />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer FooterLogo={"public/assest/images/Footer/LogoFooter.png"}
        UnderLogo={"We believe in the power of play to foster creativity, problem-solving skills, and imagination."}
        text1={"Terms of Service"}
        text2={"Privacy Policy"}
        text3={"Cookie Policy"}
      />

    </>
  )
}

export default App
