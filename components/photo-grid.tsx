const ROWS = [84.2, 154.2, 224.2, 294.3, 364.3, 434.3, 504.3];
const COLUMNS = [
  { x: 81.3, y: 17.6 },
  { x: 151.3, y: 17.6 },
  { x: 221.3, y: 17.6 },
  { x: 291.3, y: 17.6 },
  { x: 361.4, y: 17.6 },
  { x: 431.4, y: 17.6 },
  { x: 501.4, y: 17.6 },
  { x: 571.4, y: 17.6 },
  { x: 641.4, y: 14.4 },
  { x: 711.4, y: 14.4 },
];

const animationCss = `
.grid-line-h,
.grid-line-v {
  transform-box: fill-box;
}
.grid-line-h {
  transform-origin: left center;
  animation: grid-draw-x 0.85s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.grid-line-v {
  transform-origin: center top;
  animation: grid-draw-y 0.95s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes grid-draw-x {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes grid-draw-y {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@media (prefers-reduced-motion: reduce) {
  .grid-line-h,
  .grid-line-v {
    animation: none;
  }
}
`;

export function PhotoGrid() {
  return (
    <svg
      viewBox="0 0 792.8 584.8"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute top-[14%] right-0 z-0 h-[66%] w-[72%] max-w-none origin-bottom-right scale-125 overflow-visible"
    >
      <style>{animationCss}</style>
      {ROWS.map((y, index) => (
        <rect
          key={y}
          className="grid-line-h"
          style={{ animationDelay: `${index * 0.07}s` }}
          x="8.2"
          y={y}
          width="769.2"
          height="1.6"
          fill="#6ebd90"
        />
      ))}
      {COLUMNS.map((column, index) => (
        <rect
          key={column.x}
          className="grid-line-v"
          style={{ animationDelay: `${0.18 + index * 0.05}s` }}
          x={column.x}
          y={column.y}
          width="1.6"
          height="557.9"
          fill="#6ebd90"
        />
      ))}
    </svg>
  );
}
