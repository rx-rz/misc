type ButtonProps = {
  children: string;
  handleClick: ()=> void;
};
export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-primary to-secondary transition-colors duration-300 hover:bg-gradient-to-l w-fit"
    >
      {children}
    </button>
  );
}
