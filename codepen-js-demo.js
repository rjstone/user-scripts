function clear() {
  document.body.innerHTML =
    '<h1 id="heading">JavaScript Output</h1>' +
    '<div class="hackerterm">' +
    '<div id="output"></div>' +
    '</div>';
}

clear();


function title(name) {
  var heading = document.getElementById("heading");
  heading.innerHTML = name;
}


function log(msg) {
  var output = document.getElementById("output");
  msg = msg || "";
  output.innerHTML += (msg + "<br>\n");
}

function logSection(name) {
  var output = document.getElementById("output");
  output.innerHTML += "<h2>" + name + "</h2>\n";
}

var flash = '<span class="flash">';
var endFlash = '</span>';
