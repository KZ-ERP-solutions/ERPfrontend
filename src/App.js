import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Index from './pages/Index'
import Marketing from './pages/Marketing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
