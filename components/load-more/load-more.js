wow = new WOW({
  animateClass: "animated",
  offset: 100,
});
wow.init();

document.getElementById("more").addEventListener("click", function () {
  const section = document.createElement("section");
  section.innerHTML = `
    <section class="wow fadeInDown" data-wow-duration="4s">
      <img src="../../images/nature-parallax.jpg" alt="" class="c-image">
    </section>
  `;
  this.parentNode.insertBefore(section, this);
});
