const slider = document.querySelector('.slider');
  const arrowLeft = document.querySelector('.arrow.left');
  const arrowRight = document.querySelector('.arrow.right');

  arrowLeft.addEventListener('click', () => {
    slider.scrollBy({
      left: -window.innerWidth,
      behavior: 'smooth'
    });
  });

  arrowRight.addEventListener('click', () => {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: 'smooth'
    });
  });