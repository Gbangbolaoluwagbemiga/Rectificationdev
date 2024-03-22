import { Children } from "react";

function Wallet({ children }) {
  return (
    <div className="mx-auto my-5 w-60 cursor-pointer rounded-lg bg-blue-800 p-2 text-white transition-all duration-150 hover:bg-blue-300 md:text-xl">
      {children}
    </div>
  );
}

export default Wallet;
