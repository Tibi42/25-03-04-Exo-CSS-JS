

const create = document.getElementById(".btn1");
const supp = document.getElementById(".btn2");

create.addEventListener("click", creaCard);
supp.addEventListener("click", suppCard);


function creaCard() {
  const creationCard = document.createElement("card");
  creationCard.classList.add("card");
  creationCard.innerHTML =
    "<img>https://picsum.photos/536/354</img><h2>Image LoremPicsum</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, natus.</p>";
  container1.appendChild(creationCard);
}

