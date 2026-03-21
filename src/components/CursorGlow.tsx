import { useCursorGlow } from "@/hooks/use-animations";

const CursorGlow = () => {
  const pos = useCursorGlow();

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
};

export default CursorGlow;
