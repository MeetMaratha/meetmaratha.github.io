function loadSection(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => (document.getElementById(id).innerHTML = html));
}

loadSection("navbar", "sections/navbar.html");
loadSection("hero", "sections/hero.html");
