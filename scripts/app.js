const loadHtml = async  (elementId, filePath) =>{
   try{ 
   const response = await fetch(filePath);

   if(!response.ok){
      throw new Error ("File not found: " +  filePath);

   }

   const htmlContent = await  response.text();

   const  element = document.getElementById(elementId);

   if(!element){
      throw new Error ("Element not found");
   }

   element.innerHTML = htmlContent;
   if(elementId == "footer"){
      const element = document.getElementById("date");
      element.innerText = new Date().getFullYear();
   }
}catch (err){
      throw new Error (err);
   }
 
}




export {loadHtml};



   
