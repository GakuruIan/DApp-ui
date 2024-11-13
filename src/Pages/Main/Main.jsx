
// components
import Navbar from "../../components/Navbar/Navbar"

// router
import { Outlet } from "react-router-dom"


const Main = () => {
  return (
    <>
      <Navbar/>

      <div className="mt-20 mx-auto max-w-5xl">
          <Outlet/>
      </div>
    </>
  )
}

export default Main