import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import NotFoundPage from '../pages/NotFoundPage'

function NotesApp() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/note/:id" element={<DetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </>
    )
}

export default NotesApp