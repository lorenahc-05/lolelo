import { Routes, Route } from 'react-router-dom'
import WorkPage from './pages/WorkPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WorkPage />} />
      <Route path="/work" element={<WorkPage />} />
    </Routes>
  )
}
