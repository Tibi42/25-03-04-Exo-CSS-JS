const create = document.querySelector(".btn1");
const supp = document.querySelector(".btn2");

create.addEventListener("click", creaCard);
supp.addEventListener("click", suppCard);

function creaCard(e) {
  e.preventDefault();
  const container1 = document.getElementsByClassName("container")[0];
  console.log(container1);
  const creationCard = document.createElement("div");
  const formImage1 = document.getElementById("img");
  const formImage2 = document.getElementById("nom");
  const formImage3 = document.getElementById("description");
  creationCard.classList.add("card");
  formImage1.value;
  formImage2.Value;
  formImage3.Value;

  creationCard.innerHTML =
    '<img src="' +
    formImage1.value +
    '" alt="Image LoremPicsum"><h2>' +
    formImage2.value +
    "</h2><p> " +
    formImage3.value +
    "</p>";
  container1.appendChild(creationCard);
}

function suppCard(e) {
  e.preventDefault();
  const container1 = document.getElementsByClassName("container")[0];
  container1.removeChild(container1.lastChild);
}
