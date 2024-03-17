let theme = "";
const authorEl = document.getElementById("author");
const storedTheme = localStorage.getItem("theme");
if (storedTheme)
	theme = storedTheme;
else
	theme = "beach";

function updateTheme(newTheme)
{
	theme = newTheme;
	localStorage.setItem("theme", theme);
}

function getBackground()
{
	fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${theme}`)
	.then(res => res.json())
	.then(data => {
		document.body.style.backgroundImage = `url(${data.urls.full})`;
		authorEl.textContent = `by ${data.user.name}`;
		authorEl.href = data.links.html;
	})
	.catch(err => {
		document.body.style.backgroundImage = `url("images/default_bg.jpg")`;
		authorEl.textContent = `by Jasper Boer`;
		authorEl.href = "https://unsplash.com/fr/photos/KS70QiSOecM";
	});
}

export { updateTheme, getBackground };