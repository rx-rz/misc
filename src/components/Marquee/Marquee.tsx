type MarqueeProps = {
  children: string;
};
export default function Marquee({ children }: MarqueeProps) {
  return (
    <div className="bg-primary w-full text-clip whitespace-nowrap overflow-hidden text-md py-2 sm:text-xl md:text-2xl text-center">
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
