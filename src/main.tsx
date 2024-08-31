import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Saiga from './Saiga.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Saiga />
  </StrictMode>,
)
