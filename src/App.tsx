import { Routes, Route } from 'react-router-dom'
import WorkPage from './pages/WorkPage'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WorkPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/proyectos" element={<ProjectsPage />} />
    </Routes>
  )
}
