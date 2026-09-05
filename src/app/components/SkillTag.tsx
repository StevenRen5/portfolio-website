import React from 'react'

interface SkillProps {
  label: string
}

export default function SkillTag({label}:SkillProps) {
  return (
    <span 
      className="bg-[var(--second-bg-color)] border-2 border-solid border-[var(--border-color)] px-4 py-2 rounded-3xl">
      {label}
    </span>
  )
}