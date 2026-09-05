import React from "react"
import Link from "next/link"

interface ButtonProps {
  label: string
  href?: string
  additionalClass?: string
  isExternal?: boolean
  isSubmitType?: boolean
  isDisabled?: boolean
}

export default function Button({label, href, additionalClass, isExternal, isSubmitType, isDisabled}: ButtonProps) {
  // buttonHoverStyles is for "Send Message" and internal buttons styling (not external) 
  const buttonStyles: string = "px-5 py-2 rounded-lg border-2 duration-300 cursor-pointer"

  if (isExternal) {
    {/* for "Linkedin" button on homepage */}
    return (
      <a
        href={href} 
        target="_blank"
        className={`${buttonStyles} border-blue-400 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-[#112240] hover:border-[#112240]`}>
        {label}
      </a>
    )
  }
  else if (isSubmitType) {
    {/*for "Send Message" button on contact page */}
    return (
      <button type="submit" className={`${buttonStyles} border-[var(--second-border-color)] bg-[var(--btn-bg-color)] hover:bg-[var(--second-bg-color)] hover:text-[var(--second-text-color)] disabled:opacity-50 disabled:cursor-not-allowed bg-[var(--btn-bg-color)]`} disabled={isDisabled}>
        {label}
      </button>
    )
  }
  {/* for internal page routing buttons "Hire Me", "View Projects", "Contact" */}
  return (
    <Link
      href={href!} 
      className={`${additionalClass} ${buttonStyles} border-[var(--second-border-color)] bg-[var(--btn-bg-color)] hover:bg-[var(--second-bg-color)] hover:text-[var(--second-text-color)]`}>
      {label}
    </Link>
  )
}


