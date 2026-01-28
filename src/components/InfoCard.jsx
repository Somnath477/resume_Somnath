export default function InfoCard({ title, subtitle, date, desc }) {
  return (
    <div className="glass-soft rounded-xl2 p-4 motion-card">
      <div className="flex justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="text-xs text-white/60 mt-1">{subtitle}</p>
        </div>
        <span className="text-xs text-white/50">{date}</span>
      </div>
      {desc && (
        <p className="text-xs text-white/70 mt-3">{desc}</p>
      )}
    </div>
  );
}
