import { createContext, useContext, useState } from "react";

const WalletContext = createContext();

function WalletProvider({ children }) {
  const [walletVisible, setWalletVisible] = useState(false);
  const [initVisible, setInitVisible] = useState(false);
  const [wallet, setWallet] = useState(true);
  const [id, setId] = useState(0);
  const [key, setKey] = useState(true);

  // const toggleWallet = () => {
  //   setWalletVisible((prevState) => !prevState);
  // };
  const toggleEWallet = () => {
    setWallet((prevState) => !prevState);
  };
  function toggleKey(key) {
    setKey(key);
  }

  return (
    <WalletContext.Provider
      value={{
        walletVisible,
        initVisible,
        setWalletVisible,
        setInitVisible,
        wallet,
        toggleEWallet,
        // toggleWallet,
        id,
        setId,
        key,
        toggleKey,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

function Usewallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error(`context used outside the Wallet context scope`);
  }
  return context;
}

export { WalletProvider, Usewallet };
