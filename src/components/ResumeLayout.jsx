import ThemeSwitch from "./ThemeSwitch";
import Section from "./Section";
import Item from "./Item";
import ProjectCard from "./ProjectCard";
import InfoCard from "./InfoCard";

export default function ResumeLayout() {
  return (
  


    <div className="min-h-screen bg-bgDark px-4 py-10 flex justify-center">
      <div className="grid lg:grid-cols-12 gap-8 max-w-6xl w-full">

        {/* LEFT */}
        <div className="lg:col-span-5 relative ">
          <div className="bg-premiumGradient rounded-xl2 p-8 shadow-softGlow relative overflow-hidden">

            <div className="gradient-glow" />
            <div className="noise-overlay" />

            <div className="relative z-10 text-white">
              <h1 className="text-4xl font-extrabold">
                Somnath<br />Chakraborty
              </h1>

              <p className="text-sm tracking-widest uppercase opacity-80 mt-4">
                Frontend Developer · UI/UX 
              </p>

              <ThemeSwitch />

              {/* SOCIAL LINKS */}
<div className="mt-6 flex gap-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/somnath-chakraborty245497176/"
    target="_blank"
    aria-label="LinkedIn"
    className="glass-soft p-3 rounded-full hover:scale-110 transition"
  >
    <svg
      className="w-5 h-5 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667H9.09V9h3.104v1.561h.043c.433-.82 1.492-1.684 3.07-1.684 3.284 0 3.892 2.162 3.892 4.977v6.598zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM6.956 20.452H3.72V9h3.236v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.222 0z"/>
    </svg>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Somnath477"
    target="_blank"
    aria-label="GitHub"
    className="glass-soft p-3 rounded-full hover:scale-110 transition"
  >
    <svg
      className="w-5 h-5 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.292 9.428 7.868 10.958.575.105.785-.25.785-.557 0-.273-.01-.995-.016-1.953-3.2.695-3.877-1.542-3.877-1.542-.523-1.328-1.277-1.683-1.277-1.683-1.043-.713.079-.699.079-.699 1.153.081 1.759 1.184 1.759 1.184 1.026 1.757 2.691 1.25 3.347.956.104-.743.402-1.25.732-1.538-2.553-.291-5.238-1.276-5.238-5.681 0-1.254.448-2.28 1.184-3.082-.119-.29-.513-1.463.113-3.048 0 0 .967-.31 3.17 1.177a11.04 11.04 0 0 1 2.887-.388c.979.005 1.964.132 2.887.388 2.2-1.487 3.166-1.177 3.166-1.177.628 1.585.234 2.758.115 3.048.738.802 1.183 1.828 1.183 3.082 0 4.416-2.69 5.386-5.253 5.671.414.357.783 1.062.783 2.14 0 1.546-.014 2.791-.014 3.17 0 .31.207.668.79.555C20.21 21.424 23.5 17.097 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
    </svg>
  </a>

  {/* Website */}
  <a
    href="https://portfolio-frontend-cyan-sigma.vercel.app/"
    target="_blank"
    aria-label="Website"
    className="glass-soft p-3 rounded-full hover:scale-110 transition"
  >
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"/>
      <path d="M2.05 12h19.9"/>
      <path d="M12 2.05c2.5 2.73 4 6.36 4 9.95s-1.5 7.22-4 9.95c-2.5-2.73-4-6.36-4-9.95s1.5-7.22 4-9.95z"/>
    </svg>
  </a>
</div>

            </div>

            <div className="absolute -bottom-8 right-1 w-40 h-50 rounded-xl2 overflow-hidden shadow-softGlow glass motion-photo z-20">
              <img src="/profile.png" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* SKILLS + PROJECTS */}
          <div className="mt-28 bg-panelDark rounded-xl2 p-6 text-white motion-card shadow-softGlow glass motion-photo z-20">
            <Section title="Skills">
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Redux", "Tailwind", "UI/UX", "JavaScript"].map(s => (
                  <span key={s} className="px-3 py-1 text-xs rounded-full bg-white/10">
                    {s}
                  </span>
                ))}
              </div>

              <Section title="Projects">
                <div className="grid grid-cols-2 gap-3">
                  <ProjectCard title="E-Commerce Platform" link="#" />
                  <ProjectCard title="Doctor Booking App" link="https://doctorsappointmentapp.netlify.app/" />
                  <ProjectCard title="Weather App" link="https://weatherapp2626.netlify.app/" />
                  <ProjectCard title="Todo App" link="https://todo-list477.vercel.app/" />
                  <ProjectCard title="Authentication App" link="https://auth-frontend-puce-six.vercel.app/" />
                </div>
              </Section>
            </Section>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 bg-panelDark rounded-xl2 p-8 motion-card shadow-softGlow glass motion-photo z-20">
          <Section title="Creative Of Me">
            <div className="glass-soft p-4 rounded-xl2 text-sm text-white/80">
              Frontend Developer with nearly 4 years of experience building
              high-performance, responsive UI using React and modern design systems.
            </div>
          </Section>

          <Section title="Experience">
           <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard
              title="Software Developer — Ascent Engineers"
              date="2024–Present"
              desc="Led frontend architecture, improved UI performance by 30–40%."
            />
            <InfoCard
              title="Associate Software Engineer — Mphasis"
              date="2021–2024"
              desc="Reduced load time by 32%, modernized legacy UI modules."
            />
           </div>
            
           
          </Section>

          <Section title="Education">
            <div className="grid sm:grid-cols-2 gap-4">
                <InfoCard
              title="B.Tech — Electrical Engineering"
              date="2016–2020"
              desc="Techno Main Salt Lake"
            />
            <InfoCard
              title="Higher Secondary Education"
              date="2015-2016"
              desc="Beliatore High School"
            />
            <InfoCard
              title="Secondary Education"
              date="2013-2014"
              desc="Belitore High School"
            />
            </div>
            
          </Section>
        </div>
      </div>
    </div>
  );
}

