// creating a circular div

const minHand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const clockCircle = document.createElement("div");
const dot = document.createElement("div");

// creating a dot
dot.setAttribute("id", "dot");
dot.classList.add("center-dot");

clockCircle.setAttribute("id", "clock");
clockCircle.classList.add("my-clock");

// appending dot to the clock Circle
clockCircle.appendChild(dot);

document.body.append(clockCircle);
