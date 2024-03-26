import { Usewallet } from "../context/Usewallet";

function Fail() {
  const { setSuccess, walletArray } = Usewallet();
  return (
    <div className=" h-[100vh] w-[1000vw]" style={{ background: "#08081c" }}>
      <div className="mx-auto h-48 w-60 p-4">
        <p onClick={() => setSuccess(true)}>
          {walletArray.map((wallet) => (
            <span key={wallet.id}>
              <img
                src={wallet.imageUrl}
                className="me-4 h-8 w-8"
                alt="wallet.name"
              />{" "}
              <span className="font-bold">{wallet.name}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Fail;
