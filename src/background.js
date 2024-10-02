let theme = "";
const authorEl = document.getElementById("author");
const storedTheme = localStorage.getItem("theme");
if (storedTheme)
	theme = storedTheme;
else
	theme = "beach";

let currentImageId = "";
const thumbtackEl = document.getElementById("thumbtack");
const storedPin = localStorage.getItem("pinnedImageId");
if (storedPin)
{
	thumbtackEl.classList.add("activated");
	getBackground(storedPin);
}
else
	getBackground();

thumbtackEl.addEventListener("click", () => {
	const presence = thumbtackEl.classList.toggle("activated");
	if (presence)
		localStorage.setItem("pinnedImageId", currentImageId);
	else
		localStorage.removeItem("pinnedImageId");
})

function updateTheme(newTheme)
{
	theme = newTheme;
	localStorage.setItem("theme", theme);
}

function getBackground(id)
{
	if (id && typeof(id) === "string")
	{
		fetch(`https://apis.scrimba.com/unsplash/photos/${id}`)
		.then(res => res.json())
		.then(data => {
			document.body.style.backgroundImage = `url(${data.urls.full})`;
			authorEl.textContent = `by ${data.user.name}`;
			authorEl.href = data.links.html;
			currentImageId = data.id;
		})
		.catch(err => {
			document.body.style.backgroundImage = `url("images/default_bg.jpg")`;
			authorEl.textContent = `by Jasper Boer`;
			authorEl.href = "https://unsplash.com/fr/photos/KS70QiSOecM";
		});
	}
	else
	{
		fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${theme}`)
		.then(res => res.json())
		.then(data => {
			document.body.style.backgroundImage = `url(${data.urls.full})`;
			authorEl.textContent = `by ${data.user.name}`;
			authorEl.href = data.links.html;
			currentImageId = data.id;
		})
		.catch(err => {
			document.body.style.backgroundImage = `url("images/default_bg.jpg")`;
			authorEl.textContent = `by Jasper Boer`;
			authorEl.href = "https://unsplash.com/fr/photos/KS70QiSOecM";
		});
		thumbtackEl.classList.remove("activated");
		localStorage.removeItem("pinnedImageId");
	}
}

export { getBackground, updateTheme };