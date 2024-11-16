const x = 1366; // Designed width
const y = 641;  // Designed height

function scaleContent() {
  const x_ = window.innerWidth; // Current available width
  const y_ = window.innerHeight; // Current available height

  // Calculate scale factors
  const scaleX = x_ / x;
  const scaleY = y_ / y;

  // Choose the smaller scaling factor to maintain aspect ratio
  const scale = Math.min(scaleX, scaleY);

  // Apply scaling to the container
  const container = document.querySelector('.scale-container');
  container.style.transform = `scale(${scale})`;

  // Optional: Center the scaled content within the screen
  container.style.position = 'absolute';
  container.style.left = `${(x_ - x * scale) / 2}px`;
  container.style.top = `${(y_ - y * scale) / 2}px`;
}

// Call scaleContent on page load and window resize
window.onload = scaleContent;
window.onresize = scaleContent;
