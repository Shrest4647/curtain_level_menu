const body = document.querySelector("body");
function toggleNav(e) {
  let current = body.dataset.nav;
  body.dataset.nav = current == "true" ? "false" : "true";
}
