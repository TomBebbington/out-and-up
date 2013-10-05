function makeTree() {
	var t = new Image();
	t.src = "http://openclipart.org/image/60px/svg_to_png/1936/harmonic_Tree.png";
	t.className = "tree";
	t.style.right = (Math.random() * (window.innerWidth - 50)) + "px";
	var degs = (4 * Math.random() - 2)+"deg";
	console.log(degs);
	t.style.transform = "rotate("+degs+")";
	document.body.insertBefore(t, document.getElementById("main"));
}
function init() {
	for(var i = 0;i < window.innerWidth / 100;i++)
		makeTree();
}
window.onload = init;