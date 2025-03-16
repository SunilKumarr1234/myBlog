import React from 'react'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Projects from './components/Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WriteUps from './components/WriteUps'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import PicoCTF from './components/PicoCTF'

function App() {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/blogs',
            element: <Blogs />
        },
        {
            path: '/projects',
            element: <Projects />
        },
        {
            path: '/writeups',
            element: <WriteUps />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/timeline',
            element: <Timeline />
        },
        {
            path: '/picoctf-writeups',
            element: <PicoCTF />
        },
    ])

    return (
        <RouterProvider router={appRouter} />
    )
}

export default App
