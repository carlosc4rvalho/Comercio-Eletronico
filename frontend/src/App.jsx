import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import Home from 'pages/Home'
import Sign from 'pages/Sign'
import Login from 'pages/Login'
import Admin from 'pages/Admin'

const routes = createBrowserRouter([
  { path: '*', element: <NotFound /> },
  { path: '/', element: <Home /> },
  { path: '/sign', element: <Sign /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Admin /> },
])

export default function App() {
  return <RouterProvider router={routes} />
}