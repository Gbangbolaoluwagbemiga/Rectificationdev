import Claim from "./Claim";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import meme from "../assets/BOME.jpeg";

function Page() {
  const fade = {
    initial: { opacity: 0, x: 150 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.25 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={fade}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      whileInView="animate"
    >
      <div className="header flex justify-between pt-3 md:mx-5">
        <div className=" flex">
          <span>
            <img
              src="https://academy-public.coinmarketcap.com/srd-optimized-uploads/fe1903c20f264c54ad4c03a7eac3bb7a.png"
              alt="#"
              className=" me-1 h-8 w-8 rounded-full"
            />
          </span>
          <h2 className="font-bold  text-green-600 md:text-2xl">
            Book Of Meme
          </h2>
        </div>
        <Claim />{" "}
      </div>

      <div className="mx-5 mb-8 p-1 text-white md:p-8 ">
        <p>
          <h2 className="my-3 text-center text-2xl font-bold md:text-3xl">
            Introducing the BOOK OF MEME 2.O
          </h2>

          <div className=" flex flex-wrap-reverse justify-between gap-8 md:flex-nowrap">
            <div className="md:w-[99%]">
              <p className="my-3">
                <h2 className="my-3 font-bold md:text-2xl">
                  {" "}
                  The web3 culture
                </h2>
                It is an experimental project poised to redefine web3 culture by
                amalgamating memes, decentralized storage solutions, and degen
                shitcoin trading and gambling.
              </p>
              <p className="my-3">
                <h2 className="my-3 font-bold md:text-2xl">
                  The Digital Epoch of Memes
                </h2>
                This experiment endeavors to encapsulate the ever-evolving meme
                culture within a digital compendium, the BOOK OF MEME , ensuring
                each piece is immortalized on the blockchain.
              </p>{" "}
              <p className="my-3">
                <h2 className="my-3 font-bold md:text-2xl">
                  The $BOME Initiative: Pioneering Decentralized Social Media
                  with Memecoins and Immutable Storage{" "}
                </h2>
                The $BOME memecoin on Solana, and Arweave, IPFS as the primary
                storage of Book Of Meme and future expansions to Bitcoin
                inscriptions as immutable forever storage, this initiative aims
                to foster a new dimension of decentralized social media, and
                make memes unstoppable.It’s literally just a meme of book of
                meme bro.
              </p>
              <span className="text-base font-bold md:text-xl">
                Contract Address:{" "}
              </span>
              <em
                className=" text-[0.9rem] md:text-2xl"
                style={{ color: "rgba(18, 230, 179, 0.5)" }}
              >
                5K3oPCftJPzBDRxp53wvzVmjDybVgtuaSmkRSffQXjiB
              </em>
              <p className="my-3">
                <h2 className="my-3 font-bold md:text-2xl">
                  Beyond Memes: Exploring the Intersection of Decentralization,
                  Social Networking, and Creative Expression
                </h2>
                Memecoin on the most Degen chain + This digital book is linked
                with metadata to the token and the Book has even more links to
                images stored on IPFS/ARWEAVE/ONCHAIN + A decentralized social
                network app + Tools to create memes + CC0 Meme Clipart
                Collection - all of these here in one memecoin!
              </p>
            </div>

            <img
              src={meme}
              className="mx-auto mt-5 h-48 w-[90%] md:mt-20 md:h-[90vh] md:w-[70%]"
              alt="#"
            />
          </div>
        </p>

        <h2 className="mt-8 text-center text-xl font-bold md:text-3xl">
          Book of Meme Giveaway{" "}
        </h2>
        <p className="my-3">
          Make sure you're holding at least $1000 worth of $BOME coin, The more
          you hold the more you get.
        </p>

        <p className=" mx-auto mt-4 w-36 ">
          <Claim />
        </p>

        <em className="mt-2 text-center text-[1.05rem] md:text-xl ">
          Book of Meme Surged 2000% In 48 Hours
        </em>
      </div>

      <div className="mx-5 text-white md:mx-12">
        <p className=" font-bold">Follow Us</p>
        <span className="mt-2 flex justify-start">
          <i className="fa-brands fa-instagram me-2 h-8 w-6 cursor-pointer transition-all delay-150 hover:scale-125"></i>
          <i className="fa-brands fa-x-twitter me-2 h-8 w-6 cursor-pointer transition-all delay-150 hover:scale-125"></i>
          <i className="fa-brands fa-facebook me-2 h-8 w-6 cursor-pointer transition-all delay-150 hover:scale-125"></i>
        </span>
      </div>
    </motion.div>
  );
}

export default Page;
