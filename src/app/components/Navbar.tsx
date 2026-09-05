import Link from "next/link" // Next.js Link component
import Button from "@/app/components/Button"
import MobileMenu from "@/app/components/MobileMenu"

export default function NavBar() {
  const hoverStyling:string = "hover:text-[color:var(--second-text-color)] hover:underline underline-offset-4 duration-200 cursor-pointer"

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 text-2xl" style={{backgroundColor: 'var(--second-bg-color)'}}>
      <Link href="/">
        Steven <span style={{color: 'var(--second-text-color)'}}>Ren</span>
      </Link>
      <div className="hidden md:flex justify-between gap-15">
        <Link href="/#about" className={`${hoverStyling}`}>About</Link>
        <Link href="/#project" className={`${hoverStyling}`}>Projects</Link>
        <Link href="/contact" className={`${hoverStyling}`}>Contact</Link>
      </div>
      <Button label="Hire Me" href="/contact" additionalClass="hidden md:block" />
      <MobileMenu />
    </nav>
  )
}