import { Usewallet } from "../context/Usewallet";

function Wallet({ children }) {
  const { setWalletVisible } = Usewallet();

  return (
    <div
      onClick={() => setWalletVisible(true)}
      className="mx-auto my-5 w-[90%] cursor-pointer rounded-lg bg-blue-800 p-2 text-white transition-all duration-150 hover:bg-blue-300 md:w-60 md:text-xl"
    >
      {children}
    </div>
  );
}

export default Wallet;
