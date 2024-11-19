import { useContext, useState } from "react";
// components
import Button from "../../components/Button/Button";
// context
import AccountContext from "../../context/context";

// toast
import toast from "react-hot-toast";

const Settings = () => {
  const { contract, account } = useContext(AccountContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { start, end } = form;
    if (!start || !end) {
      toast.error("Please fill in All the fields");
      return;
    }

    if (start > end) {
      toast.error("End time has to be after the start time");
      return;
    }

    try {
      await contract.methods
        .setVotingPeriod(start, end)
        .send({ from: account });

      toast.success("Voting period set successfully");
      setIsSubmitting(false);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-96 lg:w-2/4 max-w-6xl md:bg-dark-50 p-8 rounded-md md:shadow-md md:shadow-inherit">
        <header className="px-2 mb-8 flex items-center justify-center flex-col gap-y-3">
          <h3 className="text-3xl font-semibold text-center ">OpenElect</h3>
          <p className="text-sm text-center text-gray-400">
            Set the time when voting starts and ends
          </p>
        </header>

        <form action="" className="">
          {/* voting start time */}
          <div className="mb-4">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Start time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
              <input
                id=""
                type="date"
                name="start"
                onChange={handleChange}
                className=" text-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-white rounded-md block border-0 w-full outline-0  p-2.5 dark:bg-dark-20  placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
          </div>
          {/* voting start time */}

          {/* voting start time */}
          <div className="mb-4">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              End time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
              <input
                id=""
                type="date"
                name="end"
                onChange={handleChange}
                className=" text-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-white rounded-md block border-0 w-full outline-0 p-2.5 dark:bg-dark-20  placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
          </div>
          {/* voting start time */}

          <Button
            text="Set Time"
            type="submit"
            handleClick={handleSubmit}
            isLoading={isSubmitting}
            style="w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Settings;
