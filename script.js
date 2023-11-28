const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const message = document.querySelector(".message");

yesBtn.addEventListener("click", () => {
  yesBtn.style.visibility = 'hidden';
  noBtn.style.visibility = 'hidden';

  message.innerHTML = "She said yes!"; // Update the message

  // Add the image
  const img = document.createElement("img");
  img.src = "./sus_eyes.jpg"; // Path to your image
  img.alt = "A special picture"; // Alt text for the image
  img.style.maxWidth = "100%"; // Ensure the image is responsive
  document.body.appendChild(img); // Add the image to the body
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  // Ensure the button doesn't go off-screen
  randomX = Math.max(10, Math.min(randomX, maxX - 10)); // 10px margin
  randomY = Math.max(10, Math.min(randomY, maxY - 10)); // 10px margin

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

