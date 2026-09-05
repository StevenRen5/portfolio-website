import Image from 'next/image'
import type {Project} from "@/app/lib/projectData" /* keyword type is used to avoid naming conflict with component named Project */
import SkillTag from "@/app/components/SkillTag"
import Button from "@/app/components/Button"

export default function Project({title, description, imageUrl, liveUrl, githubUrl, skills}:Project) {

  const skillTags = skills.map((skill, index) => <SkillTag key={index} label={skill} />)
    
  return (
    <div className="bg-[var(--second-bg-color)] border-2 border-[var(--border-color)] border-solid flex flex-col gap-2 w-[400px] rounded-3xl p-4">
      <div className="flex justify-center mb-4">
        <Image src={imageUrl} alt={`${title} project`} width={300} height={300}/>
      </div>
      <p className="text-[var(--second-text-color)] text-center text-3xl font-bold">{title}</p>
      <p className="text-xl">{description}</p>
      <div className="flex gap-1 mt-4 justify-center">{skillTags}</div>
      <div className="flex gap-2 mt-4 justify-center">
        {liveUrl && <Button label="View Live" href={liveUrl} isExternal />}
        <Button label="View GitHub" href={githubUrl} isExternal />
      </div>
    </div>
  )
}