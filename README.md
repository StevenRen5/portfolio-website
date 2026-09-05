# Portfolio Website

## Overview

Portfolio Website is my personal developer portfolio built with React, TypeScript, Next.js, and Tailwind CSS. It showcases who I am, the technologies I use, the projects I have built, and ways to contact me.

The site was redesigned from my original vanilla JavaScript, HTML, and CSS portfolio into a more modern, scalable, and maintainable web application.

## Context 📖

My original portfolio was built with vanilla JavaScript, HTML, and CSS. While it was a good starting point, it became harder to maintain and expand as I continued improving my frontend development skills and building more projects.

This portfolio rebuild focuses on creating a cleaner and more professional developer presence using modern frontend tools. React allows the site to be structured with reusable components, Next.js provides a strong structure, TypeScript adds type safety, and Tailwind CSS makes styling faster and more consistent.

This project represents my growth from building basic static webpages to developing a polished, component-based portfolio application.

## Tech Stack 🛠️

- React
- TypeScript
- Next.js
- Tailwind CSS
- JavaScript
- HTML & CSS
- Git & GitHub

## Goal 🎯

To create a modern, responsive, and professional personal portfolio that clearly presents my skills, projects, experience, and contact information while remaining easy to maintain and update as I continue growing as a developer.

## Important Files 📂

1. [src/app/page.tsx](./src/app/page.tsx)  
Main homepage containing the About Me, Tech Stack, Projects, and Contact sections.

2. [src/app/layout.tsx](./src/app/layout.tsx)  
Root layout for the application, including shared page structure, metadata, navbar, and footer.

3. [src/app/globals.css](./src/app/globals.css)  
Global styling, CSS variables, Tailwind setup, theme colors, and base typography.

4. [src/app/components/Navbar.tsx](./src/app/components/Navbar.tsx)  
Top navigation bar with links to About, Projects, and Contact sections.

5. [src/app/components/MobileMenu.tsx](./src/app/components/MobileMenu.tsx)  
Responsive mobile hamburger menu for smaller screen sizes.

6. [src/app/components/Button.tsx](./src/app/components/Button.tsx)  
Reusable button component used for internal navigation, external links, and form submission.

7. [src/app/components/Projects.tsx](./src/app/components/Projects.tsx)  
Maps through project data and renders each project card.

8. [src/app/components/Project.tsx](./src/app/components/Project.tsx)  
Reusable project card component that displays project images, descriptions, skills, live links, and GitHub links.

9. [src/app/components/SkillTag.tsx](./src/app/components/SkillTag.tsx)  
Reusable skill badge component used for both tech stack tags and project skill tags.

10. [src/app/data/projectData.ts](./src/app/data/projectData.ts)  
Stores all project information, including titles, descriptions, images, live demo links, GitHub links, and technologies used.

11. [src/app/contact/page.tsx](./src/app/contact/page.tsx)  
Contact page route that displays the contact form.

12. [src/app/contact/ContactForm.tsx](./src/app/contact/ContactForm.tsx)  
Client-side contact form that handles form submission through Formspree.

13. [src/app/contact/FormInput.tsx](./src/app/contact/FormInput.tsx)  
Reusable form input component used for text fields and the message textarea.

14. [public/images](./public/images)  
Stores personal images used throughout the portfolio.

15. [public/projectImages](./public/projectImages)  
Stores images for displayed projects.

## How to Use ▶️

### For Visitors

1. Open the [portfolio website](https://rensteven-portfolio.vercel.app/)
2. Read the About Me section to learn more about my background and interests.
3. Review the Tech Stack section to see the tools and technologies I work with.
4. Browse the Projects section to view my featured projects.
5. Click **View Live** to open a deployed project.
6. Click **View GitHub** to view the project source code.
7. Use the Contact section or Contact page to send me a message.

## Future Improvements 🚀
- **Include an achievement page displaying my awards and certifications
- **Add animations when scrolling on any of the pages 
