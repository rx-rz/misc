type ButtonProps = {
  children: string;
  handleClick: ()=> void;
};
export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="bg-secondary transition-colors duration-300 dark:text-white text-black hover:bg-primary p-1 w-fit"
    >
      {children}
    </button>
  );
}
