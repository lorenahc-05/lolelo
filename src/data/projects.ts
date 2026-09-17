export interface Project {
  name:   string
  tags:   string[]
  desc:   string
  demo?:  string
  repo?:  string
  accent: 'magenta' | 'gold'
}

export const projects: Project[] = [
  {
    name:   'Visual Voices ',
    tags:   ['Angular 18', 'Node.js', 'MongoDB', 'TypeScript', 'Three.js/WebGL', 'Blender'],
    desc:   'Plataforma de aprendizaje de Lengua de Signos Española, con un avatar 3D que signa en tiempo real. Estructurada en módulos progresivos, incorpora un motor procedural que genera frases dinámicamente combinando plantillas estructurales, un sistema de progreso adaptado al usuario y una simulación de conversación para practicar en contexto.',
    demo:   'https://visual-voices.vercel.app',
    repo:   'https://github.com/lorenahc-05/visualTFG',
    accent: 'magenta',
  },
  {
    name:   'Nutrición Núñez',
    tags:   ['React', 'Vite', 'Supabase', 'PWA'],
    desc:   'PWA de seguimiento nutricional para una nutricionista real. Menús personalizados, lista de la compra generada automáticamente y seguimiento de evolución del paciente.',
    demo:   'https://nutricion-nunez.vercel.app',
    repo:   'https://github.com/lorenahc-05/nutricion-nunez',
    accent: 'gold',
  },
]
