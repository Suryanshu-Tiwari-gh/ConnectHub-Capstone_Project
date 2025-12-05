const navLinks = document.querySelectorAll('.item a');
const cards = document.querySelectorAll('.card');
const btns = document.querySelectorAll('button');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    
    this.style.color = '#5865f2';
  });
}


for (let i = 0; i < cards.length; i++) {
  
  cards[i].addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.03)';
  });
  cards[i].addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
    
    this.style.border = 'none';
  });
  cards[i].addEventListener('mousedown', function () {
     this.style.border = '2px solid #5865f2', 400
  });
  cards[i].addEventListener('mouseup', function () {
    this.style.border = 'none';
  });
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.05)';
  });
  btns[i].addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
  btns[i].addEventListener('mousedown', function () {
    this.style.opacity = '0.7';
  });
  btns[i].addEventListener('mouseup', function () {
    this.style.opacity = '1';
  });
}
