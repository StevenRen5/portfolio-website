"use client" // In Next.js components are server components by default. Since you're using onSubmit (an event handler) you need to tell Next.js this is a client component.

import {FormEvent, CSSProperties, useState, useEffect} from "react"
import InputField from "./FormInput"
import Button from "@/app/components/Button"

export default function Contact() {

  const [isFormSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false)
      }, 3000)
    }
  }, [isFormSubmitted])
  
  async function handleSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault() // prevents browser from refreshing page after hitting button to sned message
    const formElement = event.currentTarget // points to form element
    const formData = new FormData(formElement) // grabs input values from the form element
    // response is an object describing what happened with fetch
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
      method: "POST",
      body: formData, 
      headers: {
        Accept: "application/json", // sends response back as JSON, which is easier to read if any errors
      }
    })

    if (response.ok) {
      console.log("Message sent!")
      setFormSubmitted(true)
    } else {
      console.log("Message failed:", response.statusText)
    }
  }
  
  return (
    <>
      <h1 className="text-center mt-15 mb-15">Contact <span className="text-[var(--second-text-color)]">Me</span></h1>
      <form className="flex flex-wrap justify-center gap-10" onSubmit={handleSubmit} >
        <div className="flex flex-col gap-10">
          <InputField type="text" name="name" placeholder="Full Name" />
          <InputField type="email" name="email" placeholder="Email" />
          <InputField type="tel" name="phone" placeholder="Phone Number" />
          <InputField type="text" name="subject" placeholder="Subject" />
        </div>
        <div className="flex flex-col items-center">
          <InputField name="message" placeholder="Your Message" isTextarea={true} />
          <div className="flex gap-10 items-center">
            <Button label="Send Message" isSubmitType={true} isDisabled={isFormSubmitted} />
            {isFormSubmitted && <p>Message Sent!</p>}
          </div>
        </div>
      </form>
    </>
  )
}