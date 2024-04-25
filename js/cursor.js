const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

const outlineClickSize = 25;
const outlineSize = 30;
const clickDuration = 300;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 1500, fill: "forwards" }
  );
});

window.addEventListener("mousedown", function (e) {
  cursorOutline.animate(
    {
      width: `${outlineClickSize}px`,
      height: `${outlineClickSize}px`,
    },
    { duration: 400, easing: "ease" }
  );
  sleep(200).then(() => {
    cursorOutline.animate(
      {
        width: `${outlineSize}px`,
        height: `${outlineSize}px`,
      },
      { duration: 500, easing: "ease" }
    );
  });
});
