// Select Land Page
let landPage = document.querySelector('.landing-page');

// get Array of imgs
let imgsArray = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
];

let counterLandPage = 0;

setInterval(() => {
  //Change Background Image Url
  landPage.style.backgroundImage =
    "url('imgs/" + imgsArray[counterLandPage] + "')";
  counterLandPage++;
  if (counterLandPage == imgsArray.length) {
    counterLandPage = 0;
  }
}, 3000);

// popup overlay
// Gallery Affect Onclick Image

let toggleBtn = document.querySelector('.navbar-toggler'),
  nav = document.querySelector('.navbar-collapse');

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  if (this.classList.contains('collapsed')) {
    this.classList.remove('collapsed');
    nav.classList.add('show');
    let overlay = document.createElement('div');

    // Add class to overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To body
    document.body.appendChild(overlay);
  } else {
    this.classList.add('collapsed');
    nav.classList.remove('show');
    document.querySelector('.popup-overlay').remove();
  }
};
