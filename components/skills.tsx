const skills = [
  "Solidity",
  "JavaScript",
  "React",
  "Python",
  "C",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "Three.js",
  "Git",
  "Web Development",
  "Blockchain",
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-4 text-xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li key={s} className="rounded-full border border-accent-2/40 bg-card px-3 py-1 text-sm text-foreground/80">
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
