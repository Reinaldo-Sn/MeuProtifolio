import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import firstBg from './assets/images/first_bg.jpg'
import secondBg from './assets/images/second_bg.jpg'
import fourthBg from './assets/images/fourth_bg.jpg'
import fifthBg from './assets/images/fifth_bg.jpg'
import img1 from './assets/images/sobre/img1.jpg'
import img2 from './assets/images/sobre/img2.jpg'
import img3 from './assets/images/sobre/img3.jpg'
import img4 from './assets/images/sobre/img4.jpg'

const bgImages = [firstBg, secondBg, fourthBg, fifthBg, img1, img2, img3,img4]
bgImages.forEach((src) => {
  const img = new Image()
  img.src = src
})

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
