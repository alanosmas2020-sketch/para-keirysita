const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 200;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

document.getElementById("yes").onclick = () => {
  alert("Sabía que dirías que sí 💖🥰");
};