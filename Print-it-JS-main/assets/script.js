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
const dotFocus = document.createElement("div");
const dotAddSelected = dotFocus.classList.add("dot_selected");


leftArrow.addEventListener("click", function () {

	if (slideFocus == 0) {
		slideFocus = slideFocus + 3;
		
	} else {
		slideFocus = slideFocus++;
	}
});

// Permet de sélectionner la flèche droite
const lastChildrenArrow = document.getElementById("banner");
const rightArrow = lastChildrenArrow.lastElementChild;

rightArrow.addEventListener("click", function () {
	// if()
	console.log();
});

// AJout des dots

for (let i = 0; i < slides.length; i++) {

	// Va créer des div pour chaque dot
	const dotsAdd = document.createElement("div");
	// Va attribuer la class .dot à chaque div
	dotsAdd.classList.add("dot" + i);
	dotsAdd.innerText = ".";

	dotsSection.appendChild(dotsAdd);
}
