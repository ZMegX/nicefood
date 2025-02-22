const img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.
img.src = "https://i.postimg.cc/X7B0nLmg/Must-Try-Local-Foods-19-02-2025.png";
const canvasXSize = 800;
const canvasYSize = 600;
const speed = 10; // lower is faster
const scale = 1.05;
const y = -4.5; // vertical offset

// Main program
const dx = -0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    // Image larger than canvas
    x = canvasXSize - imgW;
  }

  // Check if image dimension is larger than canvas
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  // Get canvas context
  ctx = document.getElementById("canvas").getContext("2d");

  // Set refresh rate
  return setInterval(draw, speed);
};

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // Clear the canvas
  
    // If image is <= canvas size
    if (imgW <= canvasXSize) {
      if (x < -imgW) {
        x = canvasXSize;
      }
  
      if (x < canvasXSize - imgW) {
        ctx.drawImage(img, x + imgW, y, imgW, imgH);
      }
    } else {
      if (x < -imgW) {
        x = 0;
      }
  
      if (x < 0) {
        ctx.drawImage(img, x + imgW - 1, y, imgW, imgH);
      }
    }
  
    ctx.drawImage(img, x, y, imgW, imgH);
  
    x += dx; // Move left to right
  }
  