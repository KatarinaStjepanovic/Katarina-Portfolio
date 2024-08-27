import {getFeaturedProjects}  from "../Pages/projects.js";
import { createCard } from "./utils.js";



const renderProjectsSection = () => {
    const featuredProjects = getFeaturedProjects();
    console.log(featuredProjects);
    const projectsGrid = document.getElementById("projectsGrid");
    featuredProjects.forEach( (project) => {
        const card = createCard(project.imgUrl,project.title,project.content,"col-4","#");
    projectsGrid.appendChild(card);
      
    });
    
}
renderProjectsSection();