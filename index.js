const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  const el = accordions[i];
  el.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    let img = this.children[1];
    if (this.classList.contains("active")) {
      img.style.transform = "rotate(180deg)";
    } else {
      img.style.removeProperty("transform");
    }
  });
}