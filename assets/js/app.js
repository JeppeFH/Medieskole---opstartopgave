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

/*Shopping list*/
let cartIcon = document.querySelector(".cart-icon");
let wholeCartWindow = document.querySelector(".whole-cart-window");
let hideShoppingList = document.querySelector(".hide-shopping-list");
let faBasketShopping = document.querySelector(".fa-basket-shopping");
let cancel = document.querySelectorAll(".cancel");
let quantity = document.querySelectorAll(".quantity");
let subtotal = document.querySelector(".subtotal");

faBasketShopping.addEventListener("click", () => {
  wholeCartWindow.classList.toggle("active");
});
