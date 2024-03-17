export default function getCurrentTime() {
	const date = new Date();
	document.getElementById("time").textContent = date.toLocaleTimeString("fr-FR", {timeStyle: "short"});
}