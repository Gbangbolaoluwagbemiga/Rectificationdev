function Connect() {
  const walletData = [
    {
      id: 1,
      name: "Metamask",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png",
      label: "popular",
    },
    {
      id: 2,
      name: "Trust Wallet",
      imageUrl:
        "https://avatars.githubusercontent.com/u/32179889?s=200&amp;v=4",
    },
    {
      id: 3,
      name: "Coinbase Wallet",
      imageUrl:
        "https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png",
    },
    {
      id: 4,
      name: "Ledger",
      imageUrl:
        "https://www.yadawallets.com/wp-content/uploads/2020/10/Ledger-nano-logo.png",
    },
    {
      id: 5,
      name: "Safemoon",
      imageUrl: "https://safemoon.com/hubfs/logo.svg",
    },
    {
      id: 6,
      name: "Crypto.com | Defi Wallet",
      imageUrl:
        "https://play-lh.googleusercontent.com/8aXTeaP1Sm29QPQ1IWacpgBRMpyCQLlVtA5QQ0DhN30d-R0fCdrCHlbQUZvdg2bJGvQ",
    },
    {
      id: 7,
      name: "Trezor",
      imageUrl:
        "https://cdn-images-1.medium.com/max/1200/1*Sek00YxqMdOJp5FsjveZiQ.png",
    },
    {
      id: 8,
      name: "Phantom",
      imageUrl:
        "https://assets-global.website-files.com/63ab2dc5eb51b07924102f7a/63db71cd962fa1e88458c202_phantom-logo-freelogovectors.net_.png",
    },
    {
      id: 9,
      name: "Keplr",
      imageUrl:
        "https://a-us.storyblok.com/f/1016390/400x400/f121864101/keplr.png",
    },
    {
      id: 10,
      name: "Ronin",
      imageUrl:
        "https://gam3s.gg/_next/image/?url=https://assets.polkastarter.gg/Ronin_1eb00a638b/Ronin_1eb00a638b.jpg&w=3840&q=80",
    },
    {
      id: 11,
      name: "Ledger",
      imageUrl: "https://your-image-url.com/ledger.png", // Replace 'your-image-url.com' with the actual image URL
    },
    {
      id: 12,
      name: "Ordinals",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1675922047262773248/R94-CmGU_400x400.jpg",
    },
    {
      id: 13,
      name: "Xverse",
      imageUrl:
        "https://play-lh.googleusercontent.com/UiUoRVY5QVI5DAZyP5s6xanuPRrd8HNbKGpjKt3HVPVuT6VJcnXVqR7V4ICQ9rYRCg",
    },
    {
      id: 14,
      name: "Wallet Connect",
      imageUrl:
        "https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.png",
    },
    // Add more wallet data objects as needed
  ];

  return (
    <div className="mt-5 grid grid-cols-1 gap-3 bg-white md:grid-cols-4">
      {walletData.map((wallet) => (
        <div
          key={wallet.id}
          onClick={() => handleWallet(wallet.id)}
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
  );
}

export default Connect;
