type ButtonProps = {
  text?: string;
  className?: string;
  handleClick: () => void;
  children?: React.ReactNode
};
/**a component that returns a button 
 * element with provided text, classnames
 *  for tailwind styling and an onclick function */

export  function Button({ text, className, handleClick, children }: ButtonProps) {
  return (
    <button onClick={handleClick} className={className} data-testid="button">
      {text && text}
      {children && children}
    </button>
  );
}
