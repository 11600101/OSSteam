import React from 'react'
import { createRoot } from 'react-dom/client'
import RandomStory from './RandomStoryGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RandomStory />
  </React.StrictMode>
)
