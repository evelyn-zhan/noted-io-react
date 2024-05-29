import React from 'react'
import { createRoot } from 'react-dom/client'

import NotesApp from './components/NotesApp.jsx'

const root = createRoot(document.getElementById('root'))
root.render (
    <React.StrictMode>
        <NotesApp />
    </React.StrictMode>
)