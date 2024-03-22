function Header() {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$63,469.91",
      changes: "-5.06%",
      image: "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png",
      link: "https://coinmarketcap.com/currencies/bitcoin",
    },
    {
      name: "XRP",
      symbol: "XRP",
      price: "$0.608873",
      changes: "-5.04%",
      image: "https://s2.coinmarketcap.com/static/img/coins/32x32/52.png",
      link: "https://coinmarketcap.com/currencies/xrp",
    },
    {
      name: "Tether USDt",
      symbol: "USDT",
      price: "$0.999851",
      changes: "0%",
      image: "https://s2.coinmarketcap.com/static/img/coins/32x32/825.png",
      link: "https://coinmarketcap.com/currencies/tether",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,325.88",
      changes: "-5.98%",
      image: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png",
      link: "https://coinmarketcap.com/currencies/ethereum",
    },
    {
      name: "BNB",
      symbol: "BNB",
      price: "$550.00",
      changes: "-2.88%",
      image: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png",
      link: "https://coinmarketcap.com/currencies/bnb",
    },
  ];

  return (
    <div className="scroll-container flex">
      <div></div>

      {coins.map((coin, index) => (
        <div key={index} className="scroll me-5">
          <a
            className="flex gap-4"
            href={coin.link}
            title={coin.name}
            target="_blank"
          >
            <div className="">
              <img className="mt-2 h-8 w-8" src={coin.image} alt={coin.name} />
            </div>
            <div className="flex gap-8">
              <div className="">
                <div className="">{coin.name}</div>
                <div className="">{coin.price}</div>
              </div>
              <div className="">
                <div className="">{coin.symbol}</div>
                <div className="">
                  <span className=""></span>
                  {coin.changes}
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Header;
/**/
