/*
Name: Osinach-Nnedu Chiemerie
File: p2.js
Date: 9 April 2026
Assignment 4 part 2
*/
// Complete variable definitions and random functions
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Creating a data object
var images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
]

// Adding images to the thumbnail
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/" 
for (let image of images) {
    // Creating new image element
    let newImg = document.createElement("img");
    newImg.src = `${baseURL}${image.filename}`;
    newImg.alt = image.alt;
    newImg.tabIndex = "0";
    thumbBar.appendChild(newImg);
    newImg.addEventListener("click", updateDisplayedImage);
    newImg.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// Create the updateDisplayedImage()
function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Wiring up the darken/lighten button
btn.addEventListener("click", () => {
    if (btn.classList.contains("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    

