const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Permet de sélectionner la flèche gauche
const firstChildArrow = document.getElementById('banner');
const leftArrow = firstChildArrow.firstElementChild;

leftArrow.addEventListener("click", function () {
	// ...
	console.log()
});

// Permet de sélectionner la flèche droite
const lastChildrenArrow = document.getElementById('banner');
const rightArrow = lastChildrenArrow.lastElementChild;

rightArrow.addEventListener("click", function () {
	// ...
	console.log()
});