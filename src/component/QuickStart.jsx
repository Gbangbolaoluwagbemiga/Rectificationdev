import Wallet from "./Wallet";

function QuickStart() {
  const data = [
    {
      title: "Update Mainnet Firmware Version",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Update Now",
    },
    {
      title: "Configure RPC Endpoint Settings",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Configure Now",
    },
    {
      title: "Quick Fix",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Fix Now",
    },
    {
      title: "Migration",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Migrate Now",
    },
    {
      title: "Validate",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Validate Now",
    },
    {
      title: "Restore",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Restore Now",
    },
    {
      title: "Stake",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Stake Now",
    },
    {
      title: "Swapping",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Swap Now",
    },
    {
      title: "Buying",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Buy Now",
    },
    {
      title: "Staking Review",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Review Now",
    },
    {
      title: "Reflection",
      imageSrc: "NODE_files/app.png",
      buttonText: "Reflect Now",
    },
    {
      title: "Synchronize",
      imageSrc: "NODE_files/app.png",
      buttonText: "Sync Now",
    },
    {
      title: "Unstake Tokens",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Unstake Now",
    },
    {
      title: "Claim Reflection",
      imageSrc: "NODE_files/app.png",
      buttonText: "Claim Now",
    },
    {
      title: "Claim Airdrop Rewards",
      imageSrc: "NODE_files/app.png",
      buttonText: "Claim Now",
    },
    {
      title: "Airdrop",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Join Now",
    },
    {
      title: "Bridge",
      imageSrc: "NODE_files/app.png",
      buttonText: "Bridge Now",
    },
    {
      title: "Claim",
      imageSrc: "NODE_files/app.png",
      buttonText: "Claim Now",
    },
    {
      title: "Rectification",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Rectify Now",
    },
    {
      title: "Recovery",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Recover Now",
    },
    {
      title: "Harvest my stakings",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Harvest Now",
    },
    {
      title: "Withdrawal",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Withdraw Now",
    },
    {
      title: "Gas",
      imageSrc: "NODE_files/app.png",
      buttonText: "Gas Now",
    },
    {
      title: "LP Lock",
      imageSrc: "NODE_files/app.png",
      buttonText: "Lock Now",
    },
    {
      title: "Restore tokens",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Restore Now",
    },
    {
      title: "NFT Mint",
      imageSrc: "NODE_files/secure.png",
      buttonText: "Mint Now",
    },
    {
      title: "Purchase Tokens",
      imageSrc: "NODE_files/cash.png",
      buttonText: "Purchase Now",
    },
    {
      title: "NFT Mint",
      imageSrc: "NODE_files/app.png",
      buttonText: "Mint Now",
    },
    {
      title: "Other",
      imageSrc: "NODE_files/app.png",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div>
      <div className="">
        <h3 className="">Quick Start</h3>

        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.imageSrc} alt={item.title} className="h-8 w-8" />
              <p className="font-bold">{item.title}</p>
              <Wallet>{item.buttonText}</Wallet>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickStart;
