import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Marketing from './pages/Marketing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketing/*" element={<Marketing />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
