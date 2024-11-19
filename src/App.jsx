import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Login from "./Auth/Login";
import Main from "./Pages/Main/Main";
import Voting from "./Pages/Voting/Voting";
import Results from "./Pages/Results/Results";
import Create from "./Pages/Create/Create";

// toaster
import { Toaster } from "react-hot-toast";
import Settings from "./Pages/Settings/Settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Voting />,
        },
        {
          path: "/results",
          element: <Results />,
        },
        {
          path: "/create-candidate",
          element: <Create />,
        },
        {
          path: "/voting-settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
