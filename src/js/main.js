const $slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let images = [];
function loadImage(index) {
	ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}
function handleSlider() {
	// console.log($slider.value)
	loadImage($slider.value);
}
$slider.addEventListener("input", handleSlider);
function loadAll() {
	for (let i = 1; i <= 36; i++) {
		const number = i.toString().padStart(2, "00");
		const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`;
		const img = new Image();
		img.src = url;
		img.addEventListener("load", () => {
			images[i] = img;
			if (i === 1) {
				loadImage(i);
			}
		});
	}
}
window.addEventListener("load", loadAll);
