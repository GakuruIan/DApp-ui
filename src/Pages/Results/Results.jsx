import { useContext, useEffect, useState } from "react";
// components
import Wrapper from "../../components/Wrapper/Wrapper";
import Header from "../../components/Header/Header";

// image
import image from "../../assets/astronaut.jpg";
import image2 from "../../assets/astronaut2.jpg";
import image3 from "../../assets/astronaut3.jpg";
// context
import AccountContext from "../../context/context";

//  toaster
import toast from "react-hot-toast";

const Results = () => {
  const [winner, setWinner] = useState([]);
  const { contract, account } = useContext(AccountContext);

  const GetWinner = async () => {
    try {
      const winner = await contract.methods
        .computerWinner()
        .send({ from: account });
      setWinner(winner);
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  useEffect(() => {
    GetWinner();
  }, []);
  return (
    <div className="flex justify-center w-full">
      <Wrapper>
        <div className="mt-4">
          <Header title="Results" status="Ended" />
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400 border-b border-b-dark-20">
            <thead className="text-xs uppercase bg-dark-20  text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Votes
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-dark-20 bg-dark-50 hover:bg-dark-20">
                <td className="p-2">
                  <img
                    src={image3}
                    className="w-16 md:w-14 max-w-full rounded-md max-h-full "
                    alt="Candidate"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-white">Gakuru</td>
                <td className="px-6 py-4 font-semibold text-white">6</td>

                <td className="px-6 py-4 font-semibold text-white">
                  <span
                    className={`text-xs font-medium me-2 px-3 py-1 rounded-full bg-green-900 text-green-300 hover:cursor-pointer`}
                  >
                    Winner
                  </span>
                </td>
              </tr>
              <tr className="border-b border-b-dark-20 bg-dark-50 hover:bg-dark-20">
                <td className="p-2">
                  <img
                    src={image2}
                    className="w-16 md:w-14 max-w-full rounded-md max-h-full "
                    alt="Candidate"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-white">Jane Doe</td>
                <td className="px-6 py-4 font-semibold text-white">1</td>

                <td className="px-6 py-4 font-semibold text-white">
                  <span
                    className={`text-xs font-medium me-2 px-3 py-1 rounded-full bg-yellow-900 text-yellow-300 hover:cursor-pointer`}
                  >
                    lost
                  </span>
                </td>
              </tr>
              <tr className="border-b border-b-dark-20 bg-dark-50 hover:bg-dark-20">
                <td className="p-2">
                  <img
                    src={image}
                    className="w-16 md:w-14 max-w-full rounded-md max-h-full "
                    alt="Candidate"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-white">John Doe</td>
                <td className="px-6 py-4 font-semibold text-white">2</td>

                <td className="px-6 py-4 font-semibold text-white">
                  <span
                    className={`text-xs font-medium me-2 px-3 py-1 rounded-full bg-yellow-900 text-yellow-300 hover:cursor-pointer`}
                  >
                    lost
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </div>
  );
};

export default Results;
