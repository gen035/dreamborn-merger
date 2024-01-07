const DreamInk = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
  >
    <defs>
      <radialGradient id="a">
        <stop offset="10%" stopColor="#fef3c7" />
        <stop offset="60%" stopColor="#fde68a" />
      </radialGradient>
    </defs>
    <circle cx={12} cy={12} r={12} fill="#111827" />
    <path
      fill="url('#a')"
      stroke="#c2b68e"
      strokeWidth={0.5}
      d="M12 2q0 10-10 10 10 0 10 10 0-10 10-10-10 0-10-10"
      style={{
        fill: "url(#a)",
      }}
    />
  </svg>
)
export default DreamInk
