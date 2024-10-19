document.querySelectorAll('.Nav_bar ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = 'red';
      link.style.transition = 'color 0.3s ease';
      link.style.transform = 'translateX(10px)';
    });
  
    link.addEventListener('mouseout', () => {
      link.style.color = 'black';
      link.style.transform = 'translateX(0)';
    });
  });
  