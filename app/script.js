(function () {
  let isPause = false;
  let animationId = null;

  const speed = 3;

  const car = document.querySelector(".car");
  const trees = document.querySelectorAll(".tree");
  const gameBtn = document.querySelector(".game-button");

  const tree1 = trees[0];

  animationId = requestAnimationFrame(startGame);

  function startGame() {
    animationId = requestAnimationFrame(startGame);

    treesAnimation();
  }

  function treesAnimation() {
    const newCoard = getYCoord(tree1) + speed;
    tree1.style.transform = `translateY(${newCoard}px)`;
  }

  function getYCoord(element) {
    const matrix = window.getComputedStyle(element).transform;
    const array = matrix.split(",");
    const lastElement = array[array.length - 1];
    const coordY = parseFloat(lastElement);

    return coordY;
  }

  gameBtn.addEventListener("click", () => {
    isPause = !isPause;
    if (isPause) {
      cancelAnimationFrame(animationId);
      gameBtn.children[0].style.display = "none";
      gameBtn.children[1].style.display = "initial";
    } else {
      gameBtn.children[0].style.display = "initial";
      gameBtn.children[1].style.display = "none";
    }
  });
})();
