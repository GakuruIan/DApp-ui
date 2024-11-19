import { useContext, useEffect, useState } from "react";
// context
import AccountContext from "../context/context";

// react router dom
import { useNavigate } from "react-router-dom";

// components
import Spinner from "../components/Spinner/Spinner";

// toaster
import toast from "react-hot-toast";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAccount, isLoggedIn, setIsloggedIn } = useContext(AccountContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const ConnectMask = async () => {
    setIsSubmitting(true);
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsSubmitting(false);
        setIsloggedIn(true);

        navigate("/", { state: { message: "Login successfull" } });
      } else {
        toast.error("please install metamask");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full md:w-96 lg:w-2/4 max-w-6xl md:bg-dark-50 p-2 md:p-8 rounded-md md:shadow-md md:shadow-inherit">
        <header className="px-2 mb-8 flex items-center justify-center flex-col gap-y-3">
          <h3 className="text-3xl  font-semibold text-center ">
            Welcome to OpenElect
          </h3>
          <p className="text-sm text-center text-gray-400">
            Let's get you into your account
          </p>
        </header>

        <div action="" className="flex items-center justify-center">
          <button
            onClick={ConnectMask}
            disabled={isSubmitting}
            className="px-4 py-2.5 bg-indigo-600 w-44 hover:bg-indigo-700 transition-colors duration-75"
          >
            {isSubmitting ? (
              <Spinner color="orange" message="Submitting..." />
            ) : (
              <span> Login into metamask</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
