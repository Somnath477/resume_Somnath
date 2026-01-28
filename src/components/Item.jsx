export default function Item({ title, date, desc }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-white font-medium">
        <span>{title}</span>
        <span className="text-xs opacity-60">{date}</span>
      </div>
      <p className="text-xs text-white/70 mt-1">{desc}</p>
    </div>
  );
}
