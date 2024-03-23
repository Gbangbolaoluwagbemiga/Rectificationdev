import { useEffect } from "react";
import { Usewallet } from "../context/Usewallet";
import CloseButton from "./CloseButton";

function Connect() {
  const {
    setWalletVisible,
    setInitVisible,
    initVisible,
    walletData,
    handleID,
  } = Usewallet();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function handleInit(id) {
    handleID(id);
    setInitVisible(true);
  }

  return (
    <div className={`mt-5 ${initVisible ? "blur-sm" : ""}`}>
      <div className="me-5 flex justify-end">
        <CloseButton handleClose={() => setWalletVisible(false)} />
      </div>
      <div className=" h-[30rem] overflow-auto md:h-[100vh]">
        {" "}
        <div className=" grid grid-cols-1 gap-3 bg-white px-8 pb-8 pt-4 md:grid-cols-4 md:px-16 md:pb-16">
          {walletData.map((wallet) => (
            <div
              key={wallet.id}
              // onMouseEnter={() => alert(wallet.id)}
              onClick={() => handleInit(wallet.id)}
              className="relative flex cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-gray-100 p-3"
            >
              <img
                src={wallet.imageUrl}
                alt={wallet.name}
                className="h-[80px] w-[80px] bg-transparent object-contain"
              />
              <p className="bg-transparent font-semibold capitalize tracking-wide">
                {wallet.name}
              </p>
              {wallet.label && (
                <span className="absolute right-0 top-0 w-fit bg-slate-300 px-3 py-1 capitalize text-gray-500">
                  {wallet.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Connect;
