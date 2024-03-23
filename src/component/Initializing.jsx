import { Usewallet } from "../context/Usewallet";
import CloseButton from "./CloseButton";

function Initializing() {
  const { initVisible, setInitVisible } = Usewallet();
  return (
    <div
      className={` fixed ${
        initVisible ? "block" : "hidden"
      }  left-1/2 top-1/2 z-50 mx-auto  h-1/2 w-[80%]
   -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto bg-gray-600 p-8 text-white md:w-[80%]`}
    >
      <div className="me-5 flex justify-end">
        <CloseButton handleClose={() => setInitVisible(false)} />
      </div>
      HIIIIII
    </div>
  );
}

export default Initializing;
