var seed = localStorage.treeSeed || (localStorage.treeSeed = Math.floor(Math.random() * 1000));
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
function makeTree() {
	var t = new Image();
	t.src = "//openclipart.org/image/60px/svg_to_png/1936/harmonic_Tree.png";
	t.className = "tree";
	t.style.right = (random() * (window.innerWidth - 50)) + "px";
	var degs = (6 * random() - 3)+"deg";
	t.style.transform = "rotate("+degs+")";
	document.body.insertBefore(t, document.getElementById("main"));
}
function init() {
	for(var i = 0;i < window.innerWidth / 100;i++)
		makeTree();
}
window.onload = init;