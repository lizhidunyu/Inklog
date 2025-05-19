import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.tsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
