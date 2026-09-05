"use client"

import {useState} from "react"
import Link from "next/link" // Next.js Link component

export default function MobileMenu() {
  const [isOpen, setOpen] = useState(false)

  function toggleHamburger() {
    setOpen(prevState => !prevState)
  }

  const hoverStyling:string = "hover:text-[color:var(--second-text-color)] hover:underline underline-offset-4 duration-200 cursor-pointer"

  return (
    <>
      <button onClick={toggleHamburger} className="block md:hidden">
        <i className={isOpen ? "bx bx-x text-5xl" : "bx bx-menu text-5xl"}></i>
      </button>
      <div className={isOpen ? "bg-[var(--second-bg-color)]/30 pt-2 pb-2 w-full  text-center text-base absolute right-0 top-full flex flex-col gap-5 w-[150]" : "hidden"}>
        <Link href="/#about" className={`${hoverStyling}`}>About</Link>
        <Link href="/#project" className={`${hoverStyling}`}>Projects</Link>
        <Link href="/contact" className={`${hoverStyling}`}>Contact</Link>
      </div>
    </>
  )
}