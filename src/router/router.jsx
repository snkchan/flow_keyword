import { createBrowserRouter } from "react-router-dom"
import App from "../App"

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "*",
    element: <div>잘못된페이지</div>,
  },
])
export default router
