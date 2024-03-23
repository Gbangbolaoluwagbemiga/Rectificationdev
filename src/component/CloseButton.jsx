function CloseButton({ handleClose }) {
  return (
    <button onClick={() => handleClose()}>
      <i className="fa-solid fa-xmark rounded-lg bg-gray-200 px-3 py-2 text-stone-900 hover:bg-red-500"></i>
    </button>
  );
}

export default CloseButton;
