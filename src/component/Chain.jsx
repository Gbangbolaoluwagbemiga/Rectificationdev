import Wallet from "./Wallet";

function Chain() {
  return (
    <div className="px-8 py-16 text-center">
      <h1 className=" font-bold">On-chain Fix</h1>
      <p className="">
        On-chain Fix is an open protocol to communicate securely between Wallets
        and DApps (Web3 Apps).
        <br />
        This protocol establishes a remote connection using a Bridge server.
      </p>
      <Wallet>Get Started</Wallet>
    </div>
  );
}

export default Chain;
