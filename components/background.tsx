export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="absolute top-40 left-[10%] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute bottom-0 right-[5%] h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-3xl" />
    </div>
  );
}
