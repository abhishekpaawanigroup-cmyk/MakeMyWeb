import { useEffect, useState } from "react";
 
export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
 
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
 
    window.addEventListener("mousemove", moveCursor);
 
    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);
 
  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-10
        h-10
        rounded-full
        bg-[#bc0101]
        blur-[12px]
        pointer-events-none
        z-[999]
        transition-all
        duration-100
      "
      style={{
        transform: `translate(
          ${position.x - 20}px,
          ${position.y - 20}px
        )`,
      }}
    />
  );
}