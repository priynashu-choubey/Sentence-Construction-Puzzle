interface QuitButtonProps {
  onClick?: () => void;
}

const QuitButton: React.FC<QuitButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-gray-200 text-gray-800 font-medium rounded-md px-5 py-2 hover:bg-gray-100 transition"
    >
      Quit
    </button>
  );
};

export default QuitButton;
