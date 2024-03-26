import { Usewallet } from "../context/Usewallet";

function Fail() {
  const { setSuccess, walletArray } = Usewallet();

  if (!walletArray.length) return;
  const { imageUrl, name } = walletArray[0];

  return (
    <div className=" h-[100vh] w-[100vw]" style={{ background: "#08081c" }}>
      <div className="mx-auto h-48 w-60 p-4">
        <p onClick={() => setSuccess(true)}>
          <span className="flex justify-center gap-4 text-white">
            <img src={imageUrl} className="me-4 h-8 w-8" alt="name" />{" "}
            <span className="font-bold">{name}</span>
          </span>
        </p>

        <div
          style={{ background: "#e75f2d " }}
          className="text mb-4 animate-pulse rounded-lg p-4 text-sm text-red-900 dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          <span className="font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-exclamation-diamond"
              viewBox="0 0 16 16"
            >
              <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"></path>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
            </svg>
            Error Connecting..Pls retry.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Fail;
