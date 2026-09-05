import Project from "@/app/components/Project"
import projects from "@/app/lib/projectData"

export default function Projects() {

  const projectCards = projects.map((project,index) => {
    return (<Project 
      key={index}
      title={project.title}
      description={project.description}
      imageUrl={project.imageUrl}
      liveUrl={project.liveUrl && project.liveUrl}
      githubUrl={project.githubUrl}
      skills={project.skills}
      />)
  })
  return (
    <> 
      {projectCards}
    </>
  )
}