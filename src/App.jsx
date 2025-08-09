import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Home from "./components/pages/Home"
import Specs from "./components/pages/Specs"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/specs/:name" element={<Specs />} />
        </Route>
      </>
    ),
    { basename: "/laptop-recommendation" }
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
