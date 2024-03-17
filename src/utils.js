export default function toggleFullscreen() {
	if (!document.fullscreenElement)
		document.body.requestFullscreen();
	else
		document.exitFullscreen();
}