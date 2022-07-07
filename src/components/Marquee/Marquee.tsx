type MarqueeProps = {
  children: string;
};
export default function Marquee({ children }: MarqueeProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary w-full text-clip whitespace-nowrap overflow-hidden text-md py-2 sm:text-xl md:text-2xl flex items-center h-10 sm:h-16">
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
    </div>
  );
}
