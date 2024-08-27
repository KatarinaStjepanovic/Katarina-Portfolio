import {getFeaturedProjects}  from "../Pages/projects.js";
import { createCard } from "./utils.js";
import { getFeaturedBlogs } from "../Pages/blog.js";



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

const renderBlogSection = () => {
    const featuredBlogs = getFeaturedBlogs();
    console.log(featuredBlogs);
    const blogGrid = document.getElementById("blogsGrid");
    featuredBlogs.forEach( (blog) => {
        const card = createCard(blog.imgUrl,blog.title,blog.content,"col-4","#");
    blogGrid.appendChild(card);
      
    });
    
}
renderBlogSection();

