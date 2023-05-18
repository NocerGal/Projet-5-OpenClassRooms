const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
		prix:5
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
			prix:10
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

// Permet de sélectionner la la div banner
const selectBanner = document.getElementById("banner");
// Permet de sélectionner la flèche droite
const rightArrow = selectBanner.lastElementChild;
const leftArrow = selectBanner.firstElementChild;
let indexSlides = slides.length;
let currentSlide = 0;
const dotsSection = document.querySelector(".dots");
const selectBannerImage = document.querySelector(".banner-img");

for (let i = 0; i < slides.length; i++) {
	// Va créer des div pour chaque dot
	const dotsAdd = document.createElement("div");
	// Va attribuer la class .dot à chaque div
	dotsAdd.classList.add("dot");

	dotsSection.appendChild(dotsAdd);
}

let moveCaroussel = (x) => 
{
	dotFocus[currentSlide].classList.remove("dot_selected");
	currentSlide = ((currentSlide+indexSlides+x) % indexSlides);
	dotFocus[currentSlide].classList.add("dot_selected");
	selectBannerImage.src = "./assets/images/slideshow/"+ slides[currentSlide].image;
}

// AJout des dots

// Permet d'attribuer un rond plein au premier dot au chargement de la page. Cette partie doit se mettre après la boucle permettant de créer les dots. Je voulais initiallement mettre ce code après la déclaration des let et const mais à ce moment les dots ne sont pas créés donc ne fonctionne pas.
const dotFocus = document.querySelectorAll(".dot");

dotFocus[0].classList.add("dot_selected");

leftArrow.addEventListener("click", moveCaroussel(1));
rightArrow.addEventListener("click", moveCaroussel(-1))
