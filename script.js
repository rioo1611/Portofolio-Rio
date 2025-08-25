var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("header ul li a");
l
window.addEventListener("scroll", function() {
  var current = "";
  sections.forEach(function(section) {
    if (pageYOffset >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(function(link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

var btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.style.cssText = `
  position:fixed; bottom:20px; right:20px;
  padding:10px 15px; font-size:20px;
  border:none; border-radius:50%;
  background:#00f0ff; color:#000;
  cursor:pointer; display:none;
  z-index:1000;
`;
document.body.appendChild(btnTop);

window.addEventListener("scroll", function() {
  btnTop.style.display = (window.scrollY > 300) ? "block" : "none";
});

btnTop.addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: "smooth"});
});

var observer = new IntersectionObserver(function(entries, obs) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      obs.unobserve(entry.target);
    }
  });
}, {threshold: 0.2, rootMargin: "0px 0px -50px 0px"});


sections.forEach(function(sec) {
  observer.observe(sec);
});
