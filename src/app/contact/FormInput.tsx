import {CSSProperties} from "react"

interface InputProps {
  type?: string,
  name: string,
  placeholder: string,
  isTextarea?: boolean,
}

export default function InputField({type, name, placeholder, isTextarea}:InputProps) {

  const style: CSSProperties = {
    border: "1px solid var(--border-color)",
    borderRadius: "25px",
    fontSize: "25px",
    padding: "15px",
    width: "600px",
  }

  if (isTextarea) {
    return (
      <textarea className="h-full min-h-60 mb-4 placeholder-white" style={style} name={name} placeholder={placeholder}></textarea>
    )
  }
  return (
    <input className="placeholder-white" style={style} type={type} name={name} placeholder={placeholder} />
  )
}