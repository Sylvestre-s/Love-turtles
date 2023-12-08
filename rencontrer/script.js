// Sélectionnez tous les éléments d'image de la galerie
let imageAll = document.querySelectorAll(".gallery > .profile > img");

// Fonction pour afficher l'image en grand avec overlay
function displayImage() {
  imageAll.forEach((img) => {
    img.addEventListener("click", function () {
      let imgSelect = img.dataset.image;

      // Créez l'élément overlay
      let overlay = document.createElement("div");
      overlay.setAttribute("class", "overlay");

      // Créez l'élément contenant l'image agrandie
      let bigImgCont = document.createElement("div");
      bigImgCont.setAttribute("class", "bigImgContainer");

      // Créez l'élément de l'image agrandie
      let bigImg = document.createElement("img");
      bigImg.setAttribute(
        "src",
        "../images/images-galerie/turtle-" + imgSelect
      );
      bigImg.setAttribute("class", "bigImg");

      // Ajoutez l'image agrandie à l'élément de conteneur
      bigImgCont.appendChild(bigImg);

      // Ajoutez l'élément de conteneur de l'image agrandie à l'overlay
      overlay.appendChild(bigImgCont);

      // Ajoutez l'overlay à la page
      document.body.appendChild(overlay);

      // Ajoutez un écouteur d'événement pour fermer l'overlay lorsque la croix est cliquée
      overlay.addEventListener("click", function () {
        removeImage(overlay);
      });
    });
  });
}

// Fonction pour supprimer l'overlay et l'image agrandie
function removeImage(overlay) {
  document.body.removeChild(overlay);
}
// Appelez la fonction displayImage pour activer le comportement d'affichage de l'image
displayImage();

// Formulaire

let newsletterEmailInput = document.querySelector("#input-newsletter");

let newsletterSubmitBtn = document.querySelector(".inputSubmit");

let newsletterFormContainer = document.querySelector(".newsletterSubmit");

// Création d'une span vide contenant le futur message d'erreur
let errorMessage = document.createElement("span");

// Création d'une span vide contenant le futur message de succès
let successMessage = document.createElement("span");
//

newsletterSubmitBtn.addEventListener("click", function (e) {
  let mail = newsletterEmailInput.value;

  if (mail.length < 10) {
    // Ajoutez le message d'erreur
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Le champ doit contenir au moins 10 caractères";
    newsletterFormContainer.insertAdjacentElement("afterend", errorMessage);

    e.preventDefault();
  } else {
    // Supprimez le formulaire et le message d'erreur (si présent)
    newsletterEmailInput.remove();
    newsletterSubmitBtn.remove();
    errorMessage.remove();

    // Ajoutez le message de succès
    successMessage.classList.add("success-message");
    successMessage.textContent = "Vous avez bien été inscrit à la newsletter !";
    newsletterFormContainer.insertAdjacentElement("afterend", successMessage);

    // Supprimez la bordure du conteneur de formulaire
    newsletterFormContainer.style.border = "none";
  }
});
