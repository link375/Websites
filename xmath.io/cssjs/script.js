// Author: http://lemming.life
// License: zlib/libpng License

window.addEventListener("load", setSite, false);

function setSite() {
  document.getElementsByTagName("body")[0].style.display="none";
  setCopyrightYear();
  showSite();
}

function showSite() {
  document.getElementsByTagName("body")[0].style.display="initial";
}

function setCopyrightYear() {
	var d = new Date();
	document.getElementById("copyYear").innerHTML = "&copy;" + d.getFullYear();
}