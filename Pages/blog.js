console.log("Hello from blog js");

let blogPosts = [];

const getBlogPosts =  async () => {
   const data = await fetch("../data/blog-data.json");
   const jsonData = await data.json();
   blogPosts = jsonData;
   console.log(jsonData);
}


await getBlogPosts();

 const renderBlogPosts = () => {
    const blogGrid = document.getElementById("blog");
    if(blogGrid){
       blogGrid.innerHTML = null;
       blogPosts.forEach( (element) =>{
          const link = `./blogdetails.html?id=${element.id}`;
         const card =  createCard(element,"col-3",link);
         blogGrid.appendChild(card);
        
      });
      const blogBtnDiv = document.createElement("div");
      blogBtnDiv.classList = "d-flex justify-content-center mt-5";

      const blogButton = document.createElement("button");
      blogButton.type = "button";
      blogButton.classList = "btn btn-primary w-25 p-2";
      blogButton.innerText = "Load more";

      blogBtnDiv.appendChild(blogButton);
      blogGrid.appendChild(blogBtnDiv);
     }

     
   
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

renderBlogPosts();
export {blogPosts};
