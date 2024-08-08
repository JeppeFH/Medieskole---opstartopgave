/*Navigation*/
let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
let burgerMenuClose = document.querySelector(".burgerMenuClose");
let navLinks = document.querySelector(".nav-links");

burgerMenuOpen.addEventListener("click", () => {
  navLinks.classList.add("active");
  burgerMenuOpen.classList.add("active");
  burgerMenuClose.classList.add("active");
});

burgerMenuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
});

//Mail validering
let nameInput = document.querySelector("#nameInput");
let mailInput = document.querySelector("#mailInput");
let textArea = document.querySelector("#textArea");
let submitInput = document.querySelector("#submitInput");
let pushMessage = document.querySelector("#pushMessage");

// Initialiser variabler
let isValid = true;
let errorMessage = [];

submitInput.addEventListener("click", (event) => {
  event.preventDefault();

  // Valider navn
  if (nameInput.value.trim() === "") {
    isValid = false;
    nameInput.classList.add("Error");
    errorMessage.push("Skriv dit navn");
  } else {
    nameInput.classList.remove("Error");
  }

  // Valider E-mail
  if (mailInput.value.trim() === "") {
    isValid = false;
    mailInput.classList.add("Error");
    errorMessage.push("Skriv din E-mail");
  } else {
    mailInput.classList.remove("Error");
  }

  // Valider Textarea
  if (textArea.value.trim() === "") {
    isValid = false;
    textArea.classList.add("Error");
    errorMessage.push("Skriv noget tekst");
  } else {
    textArea.classList.remove("Error");
  }

  if (isValid) {
    pushMessage.classList.add("active");
    nameInput.classList.add("active");
    mailInput.classList.add("active");
    textArea.classList.add("active");
    submitInput.classList.add("active");
  }
});

/*Shopping cart*/

/*Show Shopping list on mouse over*/
let wholeCartWindow = document.querySelector(".whole-cart-window");
let cartIcon = document.querySelector(".fa-basket-shopping");
/*state that says that shopping list isn't visible */
wholeCartWindow.inWindow = 0;

/*Shows list when mouse over*/
cartIcon.addEventListener("mouseover", () => {
  if (wholeCartWindow.classList.contains("hide-shopping-list"))
    wholeCartWindow.classList.remove("hide-shopping-list");
  /*removes the burgermenu nav when hover over cartIcon  */
  navLinks.classList.remove("active");
  /*resets the burgermenu to burgerOpen icon once hover over 
  cartIcon*/
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
});

/*Hides when mouse leaves shopping list */
cartIcon.addEventListener("mouseleave", () => {
  /*when mouse hover over shopping list make it "sleep" for 0,5s */
  setTimeout(() => {
    /*if shopping list is 0 (not hovered over) remove list */
    if (wholeCartWindow.inWindow === 0) {
      wholeCartWindow.classList.add("hide-shopping-list");
    }
  }, 500);
});

/*When hovering over the shopping list chance from 0 to 1 (1= visible) */
wholeCartWindow.addEventListener("mouseover", () => {
  wholeCartWindow.inWindow = 1;
});

/*when mouse leave list, inWindow = 0, hide list */
wholeCartWindow.addEventListener("mouseleave", () => {
  wholeCartWindow.inWindow = 0;
  wholeCartWindow.classList.add("hide-shopping-list");
});
