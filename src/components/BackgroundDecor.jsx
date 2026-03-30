export default function BackgroundDecor() {
  // Ugniježđeni chevron (>) oblici - lijeva strana
  const chevrons = Array.from({ length: 14 }, (_, i) => {
    const s = (i + 1) * 28
    const cy = 460
    return (
      <path
        key={i}
        d={`M 0 ${cy - s} L ${s} ${cy} L 0 ${cy + s}`}
        stroke="#E91E8C"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.28"
      />
    )
  })

  // Manji drugi skup chevronima (malo pomaknut desno)
  const chevrons2 = Array.from({ length: 10 }, (_, i) => {
    const s = (i + 1) * 20
    const cy = 460
    const cx = 220
    return (
      <path
        key={i}
        d={`M ${cx} ${cy - s} L ${cx + s} ${cy} L ${cx} ${cy + s}`}
        stroke="#E91E8C"
        strokeWidth="0.9"
        fill="none"
        strokeOpacity="0.2"
      />
    )
  })

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">

      {/* Lijevi panel – ugniježđeni chevroni */}
      <svg
        className="absolute bottom-0 left-0"
        width="500"
        height="520"
        viewBox="0 0 500 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {chevrons}
        {chevrons2}
      </svg>

      {/* Desni panel – rozo punjeni trokut */}
      <svg
        className="absolute top-0 right-0"
        width="280"
        height="440"
        viewBox="0 0 280 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="280,0 280,440 0,0"
          fill="#E91E8C"
          fillOpacity="0.06"
        />
      </svg>

    </div>
  )
}
