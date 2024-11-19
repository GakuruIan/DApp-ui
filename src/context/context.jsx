import { createContext, useState, useEffect } from "react";
import Web3 from "web3";
import VotingDAppABI from "../contracts/VotingDApp.json";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(() => {
    return localStorage.getItem("account") || null;
  });

  const [isLoggedIn, setIsloggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // If you have a contract, initialize it here as well
      const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
      const contractABI = VotingDAppABI.abi;
      const contractInstance = new web3Instance.eth.Contract(
        contractABI,
        contractAddress
      );
      setContract(contractInstance);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("account", account || "");
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  });

  return (
    <AccountContext.Provider
      value={{ account, setAccount, web3, contract, isLoggedIn, setIsloggedIn }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
