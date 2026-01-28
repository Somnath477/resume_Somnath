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
            </div>

            <div className="absolute -bottom-8 right-3 w-36 h-40 rounded-xl2 overflow-hidden shadow-softGlow glass motion-photo z-20">
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
