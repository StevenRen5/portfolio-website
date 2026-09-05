import React from "react"
import Image from "next/image" // Next.js Image component
import Button from "@/app/components/Button"
import SkillTag from "@/app/components/SkillTag"
import Projects from "@/app/components/Projects"

export default function Home() {
  const aboutMe: string = "Computer Science Student at Baruch College. Building modern web experiences with React, TypeScript, Next.js, JavaScript, HTML, and CSS."

  const styleBorderBottom: React.CSSProperties = {
    borderBottom: '3px solid var(--second-bg-color)',
  }

  // Skill tag array
  const skills: string[] = ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML & CSS", "Git & GitHub"]
  // Note: a returned array from .map() doesn't need an explicit type b/c TypeScript will assume.
  const skillTags = skills.map((skill, index) => <SkillTag key={index} label={skill} />)

  return (
    <main className="m-10 mt-30">
      {/* About Me Section */}
      <section id="about" className="flex flex-col-reverse sm:flex-row justify-center items-center pb-5 gap-5" style={styleBorderBottom}>
        <div className="grid gap-4 text-center sm:text-left">
          <h1>Hi, I'm <span className="text-[var(--second-text-color)]">Steven</span></h1>
          <h2 className="text-var(--second-text-color)]">Frontend Developer</h2>
          <p className="sm:w-xs">{aboutMe}</p>
          <div className="flex justify-center sm:justify-start gap-4">
            <Button label="View Projects" href="/#project"/>
            <Button label="Contact" href="/contact"/>
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-[300px] h-[300px]">
          <Image src="/images/steven_headshot.png" alt="Steven Ren picture" width={300} height={300} className=" object-cover w-full h-full" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="pb-5" style={styleBorderBottom}>
        <h1>Tech Stack</h1>
        <div className="flex flex-wrap gap-4 mt-4">
          {skillTags}
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="pb-5" style={styleBorderBottom}>
        <h1>Projects</h1>
        <div className="flex flex-wrap justify-center align-center gap-8 mt-4">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="rounded-lg pb-5">
        <h1>Contact</h1>
        <div className="flex flex-col justify-center items-center h-[200px] gap-4 bg-[var(--second-bg-color)]">
          <h2>Open to internships, freelance work, and collaboration.</h2>
          <p className="text-lg">Feel free to reach out!</p>
          <div className="flex gap-4">
            <Button label="Send Message" href="/contact" />
            <Button label="LinkedIn" href="https://www.linkedin.com/in/stevenr395/" isExternal />
          </div>
        </div>
      </section>
    </main>
  )
}
