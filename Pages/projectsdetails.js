import {projects} from "./projects.js";


const renderProjectDetails = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectId = urlParams.get("id");
    if(projectId){
        const project = projects.find( (project) => project.id == projectId );

        const projectImg = document.getElementById("pro-img");
    projectImg.src = project.imgUrl;
 
    const projectTitle = document.getElementById("pro-title");
    projectTitle.innerText = project.title;
 
    const projectCreated = document.getElementById("pro-created-at");
    projectCreated.innerText = project.createdAt;
 
    const projectContent = document.getElementById("pro-content");
    projectContent.innerText = project.content;
    }
}

renderProjectDetails();