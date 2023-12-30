import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global_styles.jsx"
import { RouterProvider } from "react-router-dom"
import router from "./router/router.jsx"
import { RecoilRoot } from "recoil"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
