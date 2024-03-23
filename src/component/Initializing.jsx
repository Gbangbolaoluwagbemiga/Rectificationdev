import { useEffect, useState } from "react";
import { Usewallet } from "../context/Usewallet";
import CloseButton from "./CloseButton";

function Initializing() {
  const { initVisible, setInitVisible } = Usewallet();

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (initVisible)
      setTimeout(function () {
        setInit(true);
      }, 4 * 1000);
  }, [initVisible]);

  return (
    <div
      className={` fixed ${
        initVisible ? "block" : "hidden"
      }  left-1/2 top-1/2 z-50 mx-auto w-[80%] 
   -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto bg-gray-400 px-4 py-8 text-white md:w-[80%]`}
    >
      <div className=" flex justify-between rounded-md bg-gray-900 px-4 py-8">
        <p className="text-xl">Back</p>
        <CloseButton handleClose={() => setInitVisible(false)} />
      </div>

      <div className="mx-auto w-[80%]">
        <div className="  my-5 rounded-md border border-red-500 p-8 text-xl font-bold">
          {!init ? (
            <p className="">Initializing...</p>
          ) : (
            <div className="flex justify-around gap-4">
              <p className="pt-2">Error Connecting</p>
              <p className="cursor-pointer rounded-md bg-black px-4 py-2 text-white ">
                Connect Manually
              </p>
            </div>
          )}{" "}
        </div>
        <div className=" my-5 flex justify-between rounded-md border p-8 text-xl font-bold">
          <p>
            Name <br />
            Easy to use browser extension
          </p>
          <p>
            <img src="" className="h-8 w-8" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Initializing;
