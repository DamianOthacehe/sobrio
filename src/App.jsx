import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { Toaster } from 'sonner'



function App() {

  return (
    <div className='app-container'>

      <Toaster position="top-right" richColors theme="dark" />

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
