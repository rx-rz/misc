type ButtonProps = {
  children: string;
  handleClick: ()=> void;
};
export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r p-2 from-primary to-secondary transition-colors duration-300 hover:bg-secondary w-fit"
    >
      {children}
    </button>
  );
}
