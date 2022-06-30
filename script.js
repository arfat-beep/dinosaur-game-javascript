const dino = document.getElementById("dino");
const jump = () => {
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
};
document.addEventListener("keydown", function () {
  jump();
});
