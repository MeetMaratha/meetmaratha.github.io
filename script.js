function loadSection(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => (document.getElementById(id).innerHTML = html));
}

loadSection("navbar", "sections/navbar.html");
loadSection("hero", "sections/hero.html");
loadSection("projects", "sections/projects.html");
loadSection("skills", "sections/skills.html");
loadSection("experience", "sections/experience.html");
loadSection("education", "sections/education.html");
loadSection("certification", "sections/certification.html");
loadSection("contact", "sections/contact.html");
loadSection("footer", "sections/footer.html");
