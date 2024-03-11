const redRect = document.querySelector(".red");

const blueRect = document.querySelector(".blue");

const greyRect = document.querySelector(".grey");

const brownRect = document.querySelector(".brown");

const lavaRect = document.querySelector(".lava");

const mudRect = document.querySelector(".mud");

//uruchamia znikanie na sam poczatek
hideGrey();
hideLava();
hideMud();

function przesunKloca(event) {
	//pobiera ci rozne wartosci z elementu przeciaganego (x, y, left, top)
	//event.target to kloc ktr przesuwasz
	const rect = event.target.getBoundingClientRect();

	//pobiera wartosci left i top
	let leftValue = rect.left;
	let topValue = rect.top;

	//dodaje do left strone w ktr myszką przesuwasz (+1 /-1) za kazdym razem gdy przesuwasz myszka przez co kloc leci ci za myszka w lewo i prawo
	event.target.style.left = `${leftValue + event.movementX}px`;

	//dodaje do top strone w ktr myszką przesuwasz (+1 / -1) za kazdym razem gdy przesuwasz myszka przez co kloc leci ci za myszka w gore i w dol
	event.target.style.top = `${topValue + event.movementY}px`;

	console.log(czyStykaja(redRect, blueRect));
	if(czyStykaja(redRect, blueRect)===true){
		hideBlue();
		hideRed();
		showGrey();
	}
	if(czyStykaja(redRect, brownRect)===true){
		hideRed();
		hideBrown();
		showLava();
	}
	if(czyStykaja(blueRect, brownRect)===true){
		hideBlue();
		hideBrown();
		showMud();
	}
}
	//znika divy
function hideBlue(){
			blueRect.style.display = "none";
}
function hideRed(){
			redRect.style.display = "none";
}
function hideBrown(){
			brownRect.style.display = "none";
}
//grey
function hideGrey(){
			greyRect.style.display = "none";
}
function showGrey(){
			greyRect.style.display ="block";
}
//lava
function hideLava(){
	lavaRect.style.display = "none";
}
function showLava(){
	lavaRect.style.display ="block";
}
//mud
function hideMud(){
	mudRect.style.display = "none";
}
function showMud(){
	mudRect.style.display ="block";
}

function czyStykaja(element1, element2) {
	//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
	//pobiera ci rozne wartosci z elementu1(tego co przeciagasz) (x, y, left, top)
	const rect1 = element1.getBoundingClientRect();

	//pobiera ci rozne wartosci z elementu2 (tego drugiego) (x, y, left, top)
	const rect2 = element2.getBoundingClientRect();

	// sprawdzanie kolizji
	if (
		rect1.x + rect1.width >= rect2.x &&
		rect1.x <= rect2.x + rect2.width &&
		rect1.y + rect1.height >= rect2.y &&
		rect1.y <= rect2.y + rect2.height
	) {

		return true;
	}
	return false;
}

//gdy klikasz / trzymasz i przesuwasz myszka
//przesuwasz kloca
redRect.addEventListener("mousedown", () => {
	redRect.addEventListener("mousemove", przesunKloca);
});

//gdy odklikujesz / odtrzymujesz
//nie przesuwasz juz kloca (niewykonujesz juz funkcji co przesuwa ta z parametrem event)
redRect.addEventListener("mouseup", () => {
	redRect.removeEventListener("mousemove", przesunKloca);
});

//gdy klikasz / trzymasz i przesuwasz myszka
//przesuwasz kloca
blueRect.addEventListener("mousedown", () => {
	blueRect.addEventListener("mousemove", przesunKloca);
});

//gdy odklikujesz / odtrzymujesz
//nie przesuwasz juz kloca (niewykonujesz juz funkcji co przesuwa ta z parametrem event)
blueRect.addEventListener("mouseup", () => {
	blueRect.removeEventListener("mousemove", przesunKloca);
});

//gdy klikasz / trzymasz i przesuwasz myszka
//przesuwasz kloca
greyRect.addEventListener("mousedown", () => {
	greyRect.addEventListener("mousemove", przesunKloca);
});

//gdy odklikujesz / odtrzymujesz
//nie przesuwasz juz kloca (niewykonujesz juz funkcji co przesuwa ta z parametrem event)
greyRect.addEventListener("mouseup", () => {
	greyRect.removeEventListener("mousemove", przesunKloca);
});
//gdy klikasz / trzymasz i przesuwasz myszka
//przesuwasz kloca
brownRect.addEventListener("mousedown", () => {
	brownRect.addEventListener("mousemove", przesunKloca);
});

//gdy odklikujesz / odtrzymujesz
//nie przesuwasz juz kloca (niewykonujesz juz funkcji co przesuwa ta z parametrem event)
brownRect.addEventListener("mouseup", () => {
	brownRect.removeEventListener("mousemove", przesunKloca);
});

//gdy klikasz / trzymasz i przesuwasz myszka
//przesuwasz kloca
lavaRect.addEventListener("mousedown", () => {
	lavaRect.addEventListener("mousemove", przesunKloca);
});

//gdy odklikujesz / odtrzymujesz
//nie przesuwasz juz kloca (niewykonujesz juz funkcji co przesuwa ta z parametrem event)
lavaRect.addEventListener("mouseup", () => {
	lavaRect.removeEventListener("mousemove", przesunKloca);
});

//gdy klikasz / trzymasz i przesuwasz myszka
//przesuwasz kloca
mudRect.addEventListener("mousedown", () => {
	mudRect.addEventListener("mousemove", przesunKloca);
});

//gdy odklikujesz / odtrzymujesz
//nie przesuwasz juz kloca (niewykonujesz juz funkcji co przesuwa ta z parametrem event)
mudRect.addEventListener("mouseup", () => {
	mudRect.removeEventListener("mousemove", przesunKloca);
});