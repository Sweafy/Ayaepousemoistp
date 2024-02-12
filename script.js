function createHearts() {
    const numHearts = 20;
  
    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      heart.classList.add('heart');
      heart.setAttribute('viewBox', '0 0 24 24');
      heart.innerHTML = '<path fill="pink" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>';
  
      document.body.appendChild(heart);
  
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
  
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
  
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }
  }