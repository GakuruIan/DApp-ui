import { useEffect, useContext } from "react";
// components
import Navbar from "../../components/Navbar/Navbar";

// router
import { Outlet } from "react-router-dom";

// context
import AccountContext from "../../context/context";

// router
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { isLoggedIn } = useContext(AccountContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Navbar />

      <div className="mt-20 mx-auto max-w-5xl">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
