type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className="mt-auto rounded-md bg-[#1a1a2e] px-3 py-2 text-sm font-medium text-white transition duration-200 hover:bg-green-500 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
