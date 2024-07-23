import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import Page1 from './Pages/Subpages/Page1';
// import Page2 from './Pages/Subpages/Page2';
import RootLayout from './Components/RootLayout';
import DetailPage from './Pages/Subpages/Detailpage';
import Detail from './Pages/Detail';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'detail/:id',
          element: <DetailPage />
        },
        {
          path: 'about-page',
          element: <About />
        },
        {
          path: 'contact-page',
          element: <Contact />
        },
        {
          path: 'detail-page',
          element: <Detail />
        }

      ]
    },

  ]);

  return <RouterProvider router={router} />

}

export default App
