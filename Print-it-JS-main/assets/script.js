const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
		prix: 5
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		prix: 10
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

const selectBanner = document.querySelector("#banner");
const changeBannerText = selectBanner.querySelectorAll("p");
const selectDotsSection = document.querySelector(".dots");
const selectBannerImage = document.querySelector(".banner-img");
const rightArrow = selectBanner.lastElementChild;
const leftArrow = selectBanner.firstElementChild;
let indexSlides = slides.length;
let currentSlide = 0;
const pCounterInBanner = changeBannerText.length;
let indexFirstPinBanner = pCounterInBanner - pCounterInBanner;

for (let i = 0; i < slides.length; i++) {
	const dotsAdd = document.createElement("div");
	dotsAdd.classList.add("dot");
	selectDotsSection.appendChild(dotsAdd);
}

let moveCaroussel = (x) => {
	dotSelectedElement[currentSlide].classList.remove("dot_selected");
	currentSlide = ((currentSlide + indexSlides + x) % indexSlides);
	dotSelectedElement[currentSlide].classList.add("dot_selected");
	selectBannerImage.src = "./Print-it-JS-main/assets/images/slideshow/" + slides[currentSlide].image;
	changeBannerText[indexFirstPinBanner].innerHTML = slides[currentSlide].tagLine;
}

const dotSelectedElement = document.querySelectorAll(".dot");

dotSelectedElement[currentSlide].classList.add("dot_selected");

leftArrow.addEventListener("click", function () {
	moveCaroussel(-1);
});
rightArrow.addEventListener("click", function () {
	moveCaroussel(1);
});