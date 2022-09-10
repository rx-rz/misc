export const SuspenseFallback = () => {
  return (
    <div
      className="w-screen h-screen inset-0 bg-tertiary 
       flex justify-center items-center dark:bg-[#0F172A]"
    >
      <p className="dark:text-white font-Poppins">Loading....</p>
    </div>
  );
};
