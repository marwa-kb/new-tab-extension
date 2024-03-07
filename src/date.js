const daysFr = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
const daysEng = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const monthsFr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet","août", "septembre", "octobre", "novembre", "décembre"];
const monthsEng = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const monthsEngShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

export default function getCurrentDate() {
	const date = new Date();
	const formatted = daysEng[date.getDay() - 1] + ", " + date.getDate() + " " + monthsEng[date.getMonth()];
	document.getElementById("date").textContent = formatted;
}