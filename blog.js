const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const fullText = link.previousElementSibling;
    const isVisible = !fullText.classList.contains('hidden');

    if (isVisible) {
      fullText.classList.add('hidden');
      link.textContent = 'Read More »';
    } else {
      fullText.classList.remove('hidden');
      link.textContent = 'Show Less «';
    }
  });
 
  
});
