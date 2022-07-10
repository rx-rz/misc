type ButtonProps = {
  text: string,
  className: string,
  handleClick: ()=> void;
};
export default function Button({ text, className, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {text}
    </button>
  );
}
