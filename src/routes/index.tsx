import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
} from 'react-router-dom'

import { Home } from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export function RouterProvider() {
  return <BaseRouterProvider router={router} />
}
