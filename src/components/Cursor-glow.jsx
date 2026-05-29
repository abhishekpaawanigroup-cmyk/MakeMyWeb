import { useEffect, useRef } from "react";
 
export default function CursorGlow() {
  const glowRef = useRef(null);
 
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
 
    let currentX = 0;
    let currentY = 0;
 
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
 
    window.addEventListener("mousemove", moveCursor);
 
    const animate = () => {
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15;
 
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(
          ${currentX - 20}px,
          ${currentY - 20}px,
          0
        )`;
      }
 
      requestAnimationFrame(animate);
    };
 
    animate();
 
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
 
  return (
    <div
      ref={glowRef}
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
        transform-gpu
        will-change-transform
      "
    />
  );
}