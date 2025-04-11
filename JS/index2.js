function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

  const lines = [
    "We deliver custom digital solutions for startups, enterprises, and everyone in between.",
    "At BEDMA, we understand that every business has unique goals.",
    "That’s why we tailor every line of code and every design element to meet your specific needs.",
    "Whether it's a stunning website, a powerful mobile app, or a seamless user experience,",
    "We focus on creating technology that drives results and boosts your brand identity.",
    "Partner with us and take the first step towards digital transformation and sustainable growth."
  ];

  const featureTextContainer = document.querySelector('.feature-text');
  let lineIndex = 0;

  function typeLine(line, callback) {
    let charIndex = 0;
    const span = document.createElement('p');
    span.style.marginBottom = '15px';
    featureTextContainer.appendChild(span);

    const interval = setInterval(() => {
      span.textContent += line.charAt(charIndex);
      charIndex++;

      if (charIndex === line.length) {
        clearInterval(interval);
        setTimeout(callback, 800); // Delay before next line starts
      }
    }, 30); // Typing speed (lower = faster)
  }

  function typeAllLines() {
    if (lineIndex < lines.length) {
      typeLine(lines[lineIndex], () => {
        lineIndex++;
        typeAllLines();
      });
    } else {
      // After finishing all lines, start over from the first line
      lineIndex = 0;
      featureTextContainer.innerHTML = ''; // Clear the text container
      setTimeout(typeAllLines, 1000); // Restart the typing animation
    }
  }

  window.addEventListener('load', () => {
    setTimeout(typeAllLines, 1000);
  });