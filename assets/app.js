const create = document.querySelector(".btn1");
const supp = document.querySelector(".btn2");
const reset = document.querySelector(".btn3");
// const form = document.querySelector("#form");

const accept = document.getElementById("accept");
// const parameters = document.getElementById("parameters");

// parameters.addEventListener("click", parameters);
accept.addEventListener("click", disappear);
create.addEventListener("click", creaCard);
supp.addEventListener("click", suppCard);
reset.addEventListener("click", function (e) {
  e.preventDefault();
  form.reset();
});

function creaCard(e) {
  e.preventDefault();
  if (
    document.getElementById("img").value == "" ||
    document.getElementById("nom").value == "" ||
    document.getElementById("description").value == ""
  ) {
    alert("Veuillez insérer une image");
    return false;
  } else {
    const container1 = document.getElementsByClassName("container")[0];
    console.log(container1);
    const creationCard = document.createElement("div");
    const formImg = document.getElementById("img");
    const formNom = document.getElementById("nom");
    const formDesc = document.getElementById("description");
    creationCard.classList.add("card", "creationCard");
    formImg.value;
    formNom.value;
    formDesc.value;

    creationCard.innerHTML =
      '<img src="' +
      formImg.value +
      '" alt="Image LoremPicsum"><h2>' +
      formNom.value +
      "</h2><p> " +
      formDesc.value +
      "</p>";
    container1.appendChild(creationCard);
  }
}

function suppCard(e) {
  e.preventDefault();
  const lastCard = document.querySelector(".creationCard");
  lastCard.remove();
}

// function suppCard(e) {
//   e.preventDefault();
//   lastCard.removeChild(lastCard.lastChild);
// }

// function reset1 (e) {
//   e.preventDefault();
//   const container1 = document.getElementsByClassName("container")[0];
//   container1.reset(container1)[0];
// }

function disappear(e) {
  e.preventDefault();
  const acceptSection = document.querySelector("#cookie");
  acceptSection.style.display = "none";
}
