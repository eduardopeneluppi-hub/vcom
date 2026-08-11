export default function SectionBadgeTitle({ children, className = '' }) {
  return (
    <h2
      className={`rounded-[28px] border border-black/[0.06] bg-black/[0.035] px-7 py-3 text-center text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-tight text-[#17151c] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_10px_30px_-18px_rgba(0,0,0,0.2)] backdrop-blur-xl ${className}`}
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif",
      }}
    >
      {children}
    </h2>
  )
}
