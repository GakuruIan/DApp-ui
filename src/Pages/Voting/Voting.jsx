import { useContext, useEffect, useState } from "react";

// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

// icons
import { CircleCheck } from "lucide-react";

// image
import image from "../../assets/astronaut.jpg";
import image2 from "../../assets/astronaut2.jpg";
import image3 from "../../assets/astronaut3.jpg";

// context
import AccountContext from "../../context/context";

const Voting = () => {
  const { account, contract } = useContext(AccountContext);
  const [candidates, setCandidates] = useState([]);

  const FetchCandidates = async () => {
    try {
      const result = await contract.methods
        .getAllCandidates()
        .send({ from: account });

      setCandidates(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchCandidates();
  }, [candidates]);

  return (
    <div className="flex justify-center w-full">
      <Wrapper>
        <div className="mt-4">
          <Header title="Voting" status="open" />

          <h6 className="text-sm mb-2">Make your choice</h6>

          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-small"
                  className="inline-flex items-center justify-center flex-col w-full p-5  rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600   text-gray-400 bg-dark-20 hover:bg-dark-10"
                >
                  <div className="flex items-center justify-center flex-col gap-y-2">
                    <div className="w-full text-lg font-semibold">
                      <img
                        src={image}
                        alt=""
                        className="h-20 w-20 rounded-md object-fit"
                      />
                    </div>
                    <div className="w-full text-center">John doe</div>
                  </div>
                  <CircleCheck size={18} />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-small"
                  className="inline-flex items-center justify-center flex-col w-full p-5  rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600   text-gray-400 bg-dark-20 hover:bg-dark-10"
                >
                  <div className="flex items-center justify-center flex-col gap-y-2">
                    <div className="w-full text-lg font-semibold">
                      <img
                        src={image2}
                        alt=""
                        className="h-20 w-20 rounded-md object-fit"
                      />
                    </div>
                    <div className="w-full text-center">Jane Doe</div>
                  </div>
                  <CircleCheck size={18} />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="hosting-small"
                  className="inline-flex items-center justify-center flex-col w-full p-5  rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600   text-gray-400 bg-dark-20 hover:bg-dark-10"
                >
                  <div className="flex items-center justify-center flex-col gap-y-2">
                    <div className="w-full text-lg font-semibold">
                      <img
                        src={image3}
                        alt=""
                        className="h-20 w-20 rounded-md object-fit"
                      />
                    </div>
                    <div className="w-full text-center">Gakuru </div>
                  </div>
                  <CircleCheck size={18} />
                </label>
              </div>
            </div>

            <div className="mt-4">
              <Button text="Vote" style="rounded-sm w-full" />
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default Voting;
