import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { ThemeProvider } from "./contexts/themeContext"
import MainLayout from "./components/layout/MainLayout"
import Home from "./components/pages/Home"
import Specs from "./components/pages/Specs"
import Laptops from "./components/Laptops"
import { useEffect, useState } from "react"

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/specs/:name" element={<Specs />} />
        </Route>
      </>
    ),
    { basename: "/laptop_recommendation" }
  )

  return (
    <>
      <ThemeProvider value={{theme, toggleTheme}}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
