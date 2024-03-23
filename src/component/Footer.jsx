import Wallet from "./Wallet";

function Footer() {
  return (
    <div className="mt-8 bg-[#0c0e29] p-4 md:p-16 text-white">
      <div className="flex justify-around">
        <div className="">
          <h1 className="text-xl font-bold">
            <span className="">50</span>K+
          </h1>
          <h6>active wallets</h6>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">
            <span className="">200</span>k+
          </h1>
          <h6>resolved issues</h6>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">
            <span className="">100</span>+
          </h1>
          <h6>contributors</h6>
        </div>
      </div>

      <div className=" my-16 text-center text-xl">
        <h2>Ready to resolve your blockchain issues?</h2>
        <h2>We are here to provide help.</h2>
        <Wallet>Get Started</Wallet>
      </div>
      <h2 className="text-center">On-chain Fix © All rights reserved.</h2>
    </div>
  );
}

export default Footer;
