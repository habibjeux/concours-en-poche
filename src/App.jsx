
import { Route, Routes } from 'react-router-dom';
import Appointment from './pages/Appointment';
import Home from './pages/Home';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>  
    </>
  )
}

export default App
