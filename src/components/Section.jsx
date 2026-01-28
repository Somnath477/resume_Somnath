export default function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xs uppercase tracking-widest text-white/60 mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}
