function CloseButton({ handleClose }) {
  return (
    <button onClick={() => handleClose()}>
      <i className=" rounded-lg bg-gray-200 px-3 py-2 text-xl font-bold text-stone-900 hover:bg-red-500">
        X
      </i>
    </button>
  );
}

export default CloseButton;
