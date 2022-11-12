type MarqueeProps = {
  children: string;
};
export const Marquee = ({ children }: MarqueeProps) => {
  return (
    <div className="bg-primary font-bold w-full text-clip whitespace-nowrap overflow-hidden text-md py-2 sm:text-xl md:text-2xl flex items-center h-10 sm:h-16 text-white">
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
    </div>
  );
};
