import Link from "next/link"

export default function Footer() {
  const hoverStyling:string = "hover:text-[color:var(--second-text-color)] hover:underline underline-offset-4 duration-200 cursor-pointer"
  const hoverIcons:string = "hover:opacity-50 duration-200 cursor-pointer"
  return (
    <footer className="flex flex-col items-center gap-4 py-4 text-xl" style={{backgroundColor: 'var(--second-bg-color)'}}>
      <div>
        <a href="https://github.com/StevenRen5" target="_blank" className={`${hoverIcons}`}>
          <i className="bx bxl-github text-6xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/stevenr395/" target="_blank" className={`${hoverIcons}`}>
          <i className="bx bxl-linkedin-square text-6xl"></i>
        </a>
      </div>
      <div className="flex gap-4">
        <Link href="/#about" className={`${hoverStyling}`}>About</Link>
        <Link href="/#project" className={`${hoverStyling}`}>Projects</Link>
        <Link href="/contact" className={`${hoverStyling}`}>Contact</Link>
      </div>
      <p>© 2026 Steven Ren | All Rights Reserved</p>
    </footer>
  )
}