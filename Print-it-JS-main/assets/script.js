const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

// Permet de sélectionner la flèche gauche
const firstChildArrow = document.getElementById("banner");
const leftArrow = firstChildArrow.firstElementChild;
let slideFocus = slides.length - 4;
const dotsSection = document.querySelector(".dots");
const dotFocus = document.getElementsByClassName("dot");

leftArrow.addEventListener("click", function () {
	if (slideFocus == 0) {
		dotFocus[slideFocus].classList.remove("dot_selected");
		slideFocus = slideFocus + 3;
		dotFocus[slideFocus].classList.add("dot_selected");
	} else {
		dotFocus[slideFocus].classList.remove("dot_selected");
		slideFocus = slideFocus - 1;
		dotFocus[slideFocus].classList.add("dot_selected");
	}
});

// Permet de sélectionner la flèche droite
const lastChildrenArrow = document.getElementById("banner");
const rightArrow = lastChildrenArrow.lastElementChild;

rightArrow.addEventListener("click", function () {
	if (slideFocus == 3) {
		dotFocus[slideFocus].classList.remove("dot_selected");
		slideFocus = slideFocus - 3;
		dotFocus[slideFocus].classList.add("dot_selected");
	} else {
		dotFocus[slideFocus].classList.remove("dot_selected");
		slideFocus = slideFocus + 1;
		dotFocus[slideFocus].classList.add("dot_selected");
	}
});

// AJout des dots
for (let i = 0; i < slides.length; i++) {

	// Va créer des div pour chaque dot
	const dotsAdd = document.createElement("div");
	// Va attribuer la class .dot à chaque div
	dotsAdd.classList.add("dot");
	dotsAdd.innerText = ".";

	dotsSection.appendChild(dotsAdd);
}

// Permet d'attribuer un rond plein au premier dot au chargement de la page. Cette partie doit se mettre après la boucle permettant de créer les dots. Je voulais initiallement mettre ce code après la déclaration des let et const mais à ce moment les dots ne sont pas créés donc ne fonctionne pas.
dotFocus[0].classList.add("dot_selected");