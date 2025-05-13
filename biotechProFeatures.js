
// biotechProFeatures.js

document.addEventListener("DOMContentLoaded", () => {
  // Typing animation for intro
  const intro = document.querySelector('.intro');
  const message = "Hi, I'm Vaitheeshwaran – passionate about biotech, coding, and innovation!";
  let index = 0;

  function typeEffect() {
    if (index < message.length) {
      intro.textContent += message.charAt(index);
      index++;
      setTimeout(typeEffect, 50);
    }
  }
  intro.textContent = "";
  typeEffect();

  // Biotech Quote Rotator
  const quotes = [
    "“Biotech is the future of sustainable innovation.”",
    "“From DNA to data – the biotech world evolves.”",
    "“Where biology meets technology, solutions emerge.”",
    "“Engineering life, enhancing lives.”",
    "“The double helix powers the next-gen code.”"
  ];
  const quoteCard = document.createElement('div');
  quoteCard.className = 'card';
  quoteCard.style.marginTop = '20px';
  document.querySelector('.professional-section').appendChild(quoteCard);

  let quoteIndex = 0;
  function rotateQuote() {
    quoteCard.innerHTML = `<h3>Biotech Thought</h3><p>${quotes[quoteIndex]}</p>`;
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }

  rotateQuote();
  setInterval(rotateQuote, 7000); // change every 7 seconds
});
