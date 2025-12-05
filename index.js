const navLinks = document.querySelectorAll('.item a');
const rows = document.querySelectorAll('.row');
const btns = document.querySelectorAll('button, .btn1, .btn2, .btn3, .btn4');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    
    this.style.color = 'purple';
  });
}

for (let i = 0; i < rows.length; i++) {
  rows[i].addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.02)';
  });
  rows[i].addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
  rows[i].addEventListener('mousedown', function () {
    this.style.boxShadow = '0 10px 30px rgba(210, 46, 46, 0.74)';
  });
  rows[i].addEventListener('mouseup', function () {
    this.style.boxShadow = '0 4px 15px transparent';
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
