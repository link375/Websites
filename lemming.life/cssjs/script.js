// Author: http://lemming.life
// License: zlib/libpng License

window.addEventListener("load", setSite, false);

function setSite() {
  document.getElementsByTagName("BODY")[0].style.display = "none";
  setContact();
  setCurrentYear();
  movePages();
  document.getElementsByTagName("BODY")[0].style.display = "initial";
}

function setContact() {
    document.getElementById("liame").addEventListener("click", function () { this.href = getLiame(); }, false);
}

function getLiame() {
	var knil = ['m','a', 'i','l','t', 'o', ':'];
    var resu = ['e','m','a','i','l'];
	var sserdda = ['@', 'l', 'e', 'm', 'm', 'i', 'n', 'g'];
	var niamod = ['.', 'l', 'i', 'f', 'e'];

    return makeString(knil) + makeString(resu) + makeString(sserdda) + makeString(niamod);
}

function makeString(charArray) {
	var str = "";
	for (var i=0; i<charArray.length; ++i) {
		str += charArray[i];
	}
	return str;
}

function setCurrentYear() {
	var d = new Date();
	document.getElementById("currentYear").innerHTML = d.getFullYear();
}


function movePages() {
  appendTo( document.getElementById("nextPagesContainer"), document.getElementById("nextPages") ); 
  appendTo( document.getElementById("previousPagesContainer"), document.getElementById("previousPages") );
}

function appendTo(container, item) {
  if ( (container !== undefined) && (container !== null) ) {
    if ( (item !== undefined) && (item !== null) ) {
      container.appendChild(item);
    } else { 
      var parentNode = container.parentNode;
      parentNode.removeChild(container);
    }
  }
}