/**
 * DOM Query Slector
 */
const incBtn = document.getElementById("increment-btn");
const countElem = document.getElementById("count");

/**
 * Events
 */
incBtn.addEventListener("click", () => {
  const currentCounter = countElem.textContent;

  const incrementedValue = Number(currentCounter) + 1;

  countElem.textContent = incrementedValue;
});
