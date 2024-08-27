const createCard = (imgUrl, title, description,colClass,link) => {

    const cardDiv = document.createElement("div");
    cardDiv.classList = colClass;
 
    const card = document.createElement("div");
    card.classList = "card";
 
    const img = document.createElement("img");
    img.classList = "card-img-top";
    img.src = imgUrl;
    img.alt = title;
 
    const cardBody = document.createElement("div");
    cardBody.classList = "card-body";
 
    const h5Tag = document.createElement("h5");
    h5Tag.innerText = title;
    h5Tag.classList = "card-title";
 
    const paragraph = document.createElement("p");
    paragraph.classList = "card-text";
    paragraph.innerText = description;
 
    const button = document.createElement("a");
    button.classList = "btn btn-primary";
    button.innerText = "View";
    button.href = link;
 
    cardBody.appendChild(h5Tag);
    cardBody.appendChild(paragraph);
    cardBody.appendChild(button);
 
    card.appendChild(img);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);
 
    return cardDiv;
 
 
 }

 export {createCard};

