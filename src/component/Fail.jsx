import { Usewallet } from "../context/Usewallet";

function Fail() {
  const { setSuccess } = Usewallet();
  return <div></div>;
}

export default Fail;
