import Wallet from "./Wallet";

function Chain() {
  return (
    <div className="chain mb-2 px-8 py-8">
      <div className=" mx-auto h-72 pt-8 text-center ">
        <h1 className=" text-xl font-bold md:text-2xl">On-chain Fix</h1>
        <p className="my-4">
          On-chain Fix is an open protocol to communicate securely between
          Wallets and DApps (Web3 Apps).
          <br />
          This protocol establishes a remote connection using a Bridge server.
        </p>
        <Wallet>Get Started</Wallet>
      </div>
    </div>
  );
}

export default Chain;
