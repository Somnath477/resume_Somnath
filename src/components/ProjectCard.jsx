export default function ProjectCard({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="glass-soft rounded-xl2 p-3 text-xs motion-card block"
    >
      <div className="font-medium">{title}</div>
      <span className="text-white/60">View Project →</span>
    </a>
  );
}
