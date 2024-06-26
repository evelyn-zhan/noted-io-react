import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import NotesApp from './components/NotesApp.jsx'

const root = createRoot(document.getElementById('root'))
root.render (
    <React.StrictMode>
        <BrowserRouter>
            <NotesApp />
        </BrowserRouter>
    </React.StrictMode>
)