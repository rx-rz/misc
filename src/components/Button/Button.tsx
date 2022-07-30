type ButtonProps = {
  text: string;
  className: string;
  handleClick: () => void;
};
/**a component that returns a button 
 * element with provided text, classnames
 *  for tailwind styling and an onclick function */

export  function Button({ text, className, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} className={className} data-testid="button">
      {text}
    </button>
  );
}
