const themes = ["default", "ocean", "emerald", "sunset"];

export default function ThemeSwitch() {
  const setTheme = (t) => {
    if (t === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", t);
    }
  };

  return (
    <div className="flex gap-2 mt-6">
      {themes.map(t => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className="px-3 py-1 text-xs rounded-full bg-white/10 hover:bg-white/20"
        >
          {t}
        </button>
      ))}
    </div>
  );
}
