console.log("Hello from blog js");

let blogPosts = [];

const getBlogPosts =  async () => {
   const data = await fetch("../data/blog-data.json");
   const jsonData = await data.json();
   blogPosts = jsonData;
   console.log(jsonData);
}

const loadMore = () => {
   renderBlogPosts(true);
}


await getBlogPosts();


 const renderBlogPosts = (isShowingMore) => {
    const blogGrid = document.getElementById("blog");
    if(blogGrid){
       blogGrid.innerHTML = null;
       blogPosts.forEach( (element,index) =>{
         if(isShowingMore){
         const link = `./blogdetails.html?id=${element.id}`;
         const card =  createCard(element,"col-3",link);
         blogGrid.appendChild(card);
         }
         else{
            if(index <=3){ 
               const link = `./blogdetails.html?id=${element.id}`;
               const card =  createCard(element,"col-3",link);
               blogGrid.appendChild(card);
            }
            
            
         }
         
        
      });
      if(isShowingMore == false){ 
      const blogBtnDiv = document.createElement("div");
      blogBtnDiv.classList = "d-flex justify-content-center mt-5";
     
      
      const blogButton = document.createElement("button");
      blogButton.type = "button";
      blogButton.classList = "btn btn-primary w-25 p-2";
      blogButton.innerText = "Load more";

      blogButton.addEventListener("click", () => loadMore());

      blogBtnDiv.appendChild(blogButton);
      blogGrid.appendChild(blogBtnDiv);
      }
     }

     
   
 }

 function getFeaturedBlogs() {
   const featuredBlogs = [];
   let first, second, third, fourth;
   fourth = third = second = first = blogPosts[0];

   for (let i = 1; i < blogPosts.length; i++) {
       if (blogPosts[i].createdAt > first.createdAt) {
           fourth = third;
           third = second;
           second = first;
           first = blogPosts[i];
       } else if (blogPosts[i].createdAt > second.createdAt && blogPosts[i].createdAt !== first.createdAt) {
           fourth = third;
           third = second;
           second = blogPosts[i];
       } else if (blogPosts[i].createdAt > third.createdAt && blogPosts[i].createdAt !== second.createdAt) {
           fourth = third;
           third = blogPosts[i];
       } else if (blogPosts[i].createdAt > fourth.createdAt && blogPosts[i].createdAt !== third.createdAt) {
           fourth = blogPosts[i];
       }
   }
   featuredBlogs[0] = first;
   featuredBlogs[1] = second;
   featuredBlogs[2] = third;
   featuredBlogs[3] = fourth;

   return featuredBlogs;
}

 const createCard = (element,colClass,link) => {

    const cardDiv = document.createElement("div");
    cardDiv.classList = colClass;
 
    const card = document.createElement("div");
    card.classList = "card";
 
    const img = document.createElement("img");
    img.classList = "card-img-top";
    img.src = element.imgUrl;
    img.alt = element.title;
 
    const cardBody = document.createElement("div");
    cardBody.classList = "card-body";
 
    const title = document.createElement("h5");
    title.innerText = element.title;
    title.classList = "card-title";
 
    const paragraph = document.createElement("p");
    paragraph.classList = "card-text";
    paragraph.innerText = element.content;
 
    const button = document.createElement("a");
    button.classList = "btn btn-primary";
    button.innerText = "View";
    button.href = link;
 
    cardBody.appendChild(title);
    cardBody.appendChild(paragraph);
    cardBody.appendChild(button);
 
    card.appendChild(img);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);
 
    return cardDiv;
 
 
 }

renderBlogPosts(false);
export {blogPosts};
export {getFeaturedBlogs};
