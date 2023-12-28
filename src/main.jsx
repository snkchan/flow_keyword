import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global_styles.jsx"
import { RouterProvider } from "react-router-dom"
import router from "./router/router.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
)
