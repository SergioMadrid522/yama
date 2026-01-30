export default function PromoBadge() {
  return (
    <div
      className="
        absolute top-0 right-0 
        text-yellow-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
        border border-yellow-500/50 
        bg-yellow-500/40
        px-3 py-1 
        rounded-full 
        text-[20px] md:text-xl lg:text-xl
        font-sans font-bold uppercase tracking-widest 
        w-fit
        animate-pulse"
    >
      <p>3x2</p>
    </div>
  );
}
