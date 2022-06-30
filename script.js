const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
};
let isAlive = setInterval(() => {
  // get dino y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  //   get cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect colliution
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game over");
  }
}, 10);

document.addEventListener("keydown", function () {
  jump();
});
