var typed, typed1, typed2;

function typethis() {
  console.log("Hi");
  typed = new Typed("#kaiyo", {
    strings: ["Kaiyo Igaki"],
    typeSpeed: 50,
    backSpeed: 50,
    showCursor: false,
    loop: false,
  });
  typed1 = new Typed("#raj", {
    strings: ["Raj Patel"],
    typeSpeed: 50,
    backSpeed: 50,
    showCursor: false,
    loop: false,
  });
  typed2 = new Typed("#freddy", {
    strings: ["Fredric De Quiros"],
    typeSpeed: 50,
    backSpeed: 50,
    showCursor: false,
    loop: false,
  });
}

typethis();

document.getElementById("about-button").addEventListener("click", function () {
  typed.destroy();
  typed1.destroy();
  typed2.destroy();
  typethis();
});
