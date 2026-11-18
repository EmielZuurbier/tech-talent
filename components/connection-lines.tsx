const MINT = "#6ebd90";
const SKY = "#029eda";
const SKY_LIGHT = "#1cade5";

function TraceMask({
  id,
  d,
  className,
}: {
  id: string;
  d: string;
  className?: string;
}) {
  return (
    <mask
      id={id}
      maskUnits="userSpaceOnUse"
      maskContentUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="596"
      height="320"
    >
      <path
        d={d}
        pathLength={100}
        className={className ? `circuit-trace ${className}` : "circuit-trace"}
        fill="none"
        stroke="#fff"
        strokeWidth="30"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </mask>
  );
}

const animationCss = `
.circuit-trace {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: circuit-draw 1.35s cubic-bezier(0.45, 0, 0.2, 1) forwards;
}
.circuit-trace-b { animation-delay: 0.16s; }
.circuit-trace-c { animation-delay: 0.32s; }
.circuit-node {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: circuit-node 0.45s ease-out forwards;
}
.circuit-node-2 { animation-delay: 0.28s; }
.circuit-node-3 { animation-delay: 0.62s; }
.circuit-node-4 { animation-delay: 0.95s; }
.circuit-node-5 { animation-delay: 1.2s; }
@keyframes circuit-draw { to { stroke-dashoffset: 0; } }
@keyframes circuit-node {
  0% { opacity: 0; transform: scale(0.35); }
  70% { opacity: 1; transform: scale(1.08); }
  100% { opacity: 1; transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .circuit-trace {
    animation: none;
    stroke-dashoffset: 0;
  }
  .circuit-node {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
`;

export function ConnectionLines() {
  return (
    <svg
      viewBox="0 0 595.3 318.8"
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 z-30 h-auto w-[70%] max-w-none overflow-visible"
    >
      <style>{animationCss}</style>
      <defs>
        <TraceMask id="tt-trace-mint-a" d="M150.8 62 H325 L402.8 138 V308" />
        <TraceMask
          id="tt-trace-mint-b"
          className="circuit-trace-b"
          d="M114.8 167.2 H219 L294 227.3 H464.4 V19.6"
        />
        <TraceMask
          id="tt-trace-sky"
          className="circuit-trace-c"
          d="M12 268.6 H504 V150 H590"
        />
      </defs>

      <path
        mask="url(#tt-trace-mint-a)"
        fill={MINT}
        d="M402.8,314.1c-3.5,0-6.4-2.9-6.4-6.4v-172.8c0-2.6-1.1-5.1-2.9-6.9l-64.3-63c-1.8-1.8-4.2-2.8-6.7-2.8h-171.7c-3.6,0-6.5-2.9-6.5-6.4s2.9-6.5,6.5-6.5h171.7c5.9,0,11.5,2.3,15.7,6.4l64.4,63.1c4.3,4.2,6.7,10.1,6.7,16.1v172.8C409.3,311.2,406.4,314.1,402.8,314.1Z"
      />
      <path
        mask="url(#tt-trace-mint-b)"
        fill={MINT}
        d="M448.3,233.8h-154.1c-5.8,0-11.4-2.3-15.6-6.3l-52.9-51.1c-1.8-1.8-4.2-2.7-6.7-2.7h-104.2c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.4,6.5-6.4h104.2c5.9,0,11.4,2.2,15.7,6.3l52.9,51.1c1.8,1.7,4.1,2.6,6.6,2.6h154.1c5.3,0,9.6-4.3,9.6-9.5V19.6c0-3.6,2.9-6.5,6.5-6.5s6.4,2.9,6.4,6.5v191.7C470.8,223.7,460.7,233.8,448.3,233.8Z"
      />
      <path
        mask="url(#tt-trace-sky)"
        fill={SKY_LIGHT}
        d="M488.1,275H12c-3.6,0-6.5-2.9-6.5-6.4s2.9-6.5,6.5-6.5h476.1c5.3,0,9.6-4.3,9.6-9.6v-92.4c0-12.4,10.1-22.5,22.5-22.5h67.2c3.6,0,6.5,2.9,6.5,6.5s-2.9,6.4-6.5,6.4h-67.2c-5.3,0-9.5,4.3-9.5,9.6v92.4C510.7,264.9,500.6,275,488.1,275Z"
      />

      <circle className="circuit-node circuit-node-2" cx="150.8" cy="55.8" r="6.4" fill="#fff" />
      <circle className="circuit-node" cx="114.8" cy="167.2" r="6.4" fill="#fff" />
      <g className="circuit-node circuit-node-3">
        <circle cx="402.8" cy="227.3" r="10.5" fill={SKY} />
        <circle cx="402.7" cy="227.3" r="6.4" fill="#fff" />
      </g>
      <g className="circuit-node circuit-node-5">
        <circle cx="464.4" cy="19.6" r="10.5" fill={MINT} />
        <circle cx="464.3" cy="19.6" r="6.4" fill="#fff" />
      </g>
      <g className="circuit-node">
        <circle cx="12.1" cy="268.6" r="10.5" fill={SKY} />
        <circle cx="12" cy="268.6" r="6.4" fill="#fff" />
      </g>
      <g className="circuit-node circuit-node-4">
        <circle cx="402.7" cy="268.6" r="10.5" fill={SKY} />
        <circle cx="402.6" cy="268.6" r="6.4" fill="#fff" />
      </g>
    </svg>
  );
}
