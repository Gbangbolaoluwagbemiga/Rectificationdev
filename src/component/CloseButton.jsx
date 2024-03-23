function CloseButton({ handleClose }) {
  return (
    <button onClick={() => handleClose()}>
      <i className="fa-solid fa-xmark bg-gray-200 text-white hover:bg-red-500"></i>
    </button>
  );
}

export default CloseButton;
