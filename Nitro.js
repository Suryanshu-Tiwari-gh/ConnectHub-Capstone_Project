const navLinks = document.querySelectorAll('.i a');
const plans = document.querySelectorAll('.p1');
const btns = document.querySelectorAll('.b1, .b2, .b3, .b4, .b5, .b6, .b7, .b8');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    
    this.style.color = 'purple';
  });
}

for (let i = 0; i < plans.length-1; i++) {
  plans[i].addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.03)';
  });
  plans[i].addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
  plans[i].addEventListener('mousedown', function () {
    this.style.border = '3px solid #ff6b6b';
  });
  plans[i].addEventListener('mouseup', function () {
    this.style.border = '3px solid transparent';
  });
plans[2].addEventListener('mouseup', function () {
    this.style.border = '3px solid #5865f2';
  });
plans[2].addEventListener('mousedown', function () {
    this.style.border = '3px solid #ff6b6b';
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
    this.style.opacity = '0.8';
  });
  btns[i].addEventListener('mouseup', function () {
    this.style.opacity = '1';
  });
}

const cards = document.querySelectorAll('.c1');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function () {
    this.style.backgroundColor = '#33a5658a';
  });
  cards[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
  });
}
