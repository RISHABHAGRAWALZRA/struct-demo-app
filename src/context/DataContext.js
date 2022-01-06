import { createContext, useEffect, useState } from "react";

import {
  connectWithWallet,
  getMainBalance,
  checkCorrectNetwork,
} from "../actions/web3Actions";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  
  const [data, setData] = useState({
    wallet: false,
    chainId: "not found",
    address: "Unavailable",
    balance: "0",
  });

  const connectButton = async () => {
    let wallet = false;
    let balance = "0";
    let chainId = "not found";

    let address = await connectWithWallet();

    if (address !== null) {
      console.log(address);
      balance = await getMainBalance(address);
      chainId = await checkCorrectNetwork();
    } else address = "Unavailable";

    setData({
      wallet: wallet,
      chainId: chainId,
      address: address,
      balance: balance,
    });

    console.log(data);
  };

  useEffect(() => {
    connectButton();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
