import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Marketing from './pages/Marketing'
import Planning from './pages/planning/Planning'
import SuperAdmin from './pages/SuperAdmin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/admin" element={<SuperAdmin />}/>
      <Route path="/marketing/*" element={<Marketing />} />
      <Route path="/planning/*" element={<Planning />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
