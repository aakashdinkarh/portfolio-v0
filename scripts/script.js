function go(loc) {
  var elem = document.getElementById(loc);
  elem.scrollIntoView();
}

function show_hide(a) {
  let element = document.getElementById(a);
  if (this.innerText === "Show more") {
    $(element).show(500);
    this.innerHTML = "Show less";
  } else {
    $(element).hide(500);
    this.innerHTML = "Show more";
  }
}

window.onscroll = function () {
  var topbtn = document.getElementById("top-btn");
  if (document.documentElement.scrollTop < 71) {
    topbtn.style.display = "none";
  } else {
    topbtn.style.display = "block";
  }
};

function barclick() {
  var baricon = document.getElementById("icon");
  var closebtn = document.getElementById("close");
  var navbar = document.getElementById("nav-bar");
  navbar.style.width = "100%";
  baricon.style.display = "none";
  closebtn.style.display = "block";
}
function closeclick() {
  var baricon = document.getElementById("icon");
  var closebtn = document.getElementById("close");
  var navbar = document.getElementById("nav-bar");
  navbar.style.width = "0";
  baricon.style.display = "block";
  closebtn.style.display = "none";
}

(function updateCopyright() {
  const copyrightElement = document.getElementsByClassName('copyright')[0];
  copyrightElement.children[1].innerText = `| ${new Date().getFullYear()}`;
})();
