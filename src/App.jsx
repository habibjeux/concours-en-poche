
import { Route, Routes } from 'react-router-dom';
import Appointment from './pages/Appointment';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>  
      <Footer />
    </>
  )
}

export default App
