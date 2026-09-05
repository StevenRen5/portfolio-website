/* file that contains the individual project information stored in an array */

export interface Project {
  title: string
  description: string
  imageUrl: string
  liveUrl?: string // optional 
  githubUrl: string
  skills: string[]
}

const projects: Project[] = [
  {
    title: "CPP Matcher",
    description: "CPP Matcher is an automated conversation partner matching system built for my club. It processes applicant data from a CSV file and pairs participants based on language compatibility, shared availability, and gender preference.",
    imageUrl: "/projectImages/cpp-matcher.png",
    liveUrl: "https://cpp-matcher.vercel.app/",
    githubUrl: "https://github.com/StevenRen5/projects/tree/main/cpp-matcher",
    skills: ["React", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Amazon Website Clone",
    description: "A multi-page Amazon clone website featuring product browsing, cart management, checkout, order history, and delivery tracking pages",
    imageUrl: "/projectImages/amazon.png",
    liveUrl: "https://javascript-course-amazon-clone.vercel.app/amazon.html",
    githubUrl: "https://github.com/StevenRen5/javascript-amazon-clone",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    title: "University Webpage",
    description: "A university website with five page sections (Home, About, Courses, Facilities, Testimonials)",
    imageUrl: "/projectImages/university.png",
    liveUrl: "https://html-css-university-webpage.vercel.app/",
    githubUrl: "https://github.com/StevenRen5/html-css-university-webpage",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "YouTube Clone",
    description: "A YouTube homepage clone page built to practice HTML & CSS basics.",
    imageUrl: "/projectImages/youtube.png",
    liveUrl: "https://html-css-course-youtube-clone.vercel.app/",
    githubUrl: "https://github.com/StevenRen5/html-css-course-youtube-clone",
    skills: ["HTML", "CSS"],
  },
]
export default projects

