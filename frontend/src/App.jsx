import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFound /> },
])

export default function App() {
  return <RouterProvider router={routes} />
}