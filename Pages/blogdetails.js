import { blogPosts } from "./blog.js";

const getMinsToRead = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split((/\s+/)).length;
    return Math.ceil(wordCount/wordsPerMinute);
 
 }

const renderBlogDetails = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("id");
    
    if(blogId){
       const blog = blogPosts.find( (blog) => blog.id == blogId);
    console.log(blog);
 
    const blogImg = document.getElementById("blog-img");
    blogImg.src = blog.imgUrl;
 
    const blogTitle = document.getElementById("blog-title");
    blogTitle.innerText = blog.title;
 
    const blogReadingTime = document.getElementById("blog-read-time");
    blogReadingTime.innerText = getMinsToRead(blog.content) + "min";
 
    const blogCreated = document.getElementById("blog-created-at");
    blogCreated.innerText = blog.createdAt;
 
    const blogContent = document.getElementById("blog-content");
    blogContent.innerText = blog.content;
 
 
    
 
    }
   
 }
 
 
 
 renderBlogDetails();