import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Login from "./Auth/Login";
import Main from "./Pages/Main/Main";
import Voting from "./Pages/Voting/Voting";
import Results from "./Pages/Results/Results"
import Create from "./Pages/Create/Create";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Voting/>
        },
        {
          path:'/results',
          element:<Results/>
        },
        {
          path:'/create-candidate',
          element:<Create/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
