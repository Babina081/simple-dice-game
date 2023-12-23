function onClickPlay() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector('.img1')
    .setAttribute('src', './images/dice' + [randomNumber1] + '.png');

  document
    .querySelector('.img2')
    .setAttribute('src', './images/dice' + [randomNumber2] + '.png');

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🥳 Player 1 Wins';
    animate1();
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins 🥳';
    animate2();
  } else {
    document.querySelector('h1').innerHTML = '🤜🏻Draw🤛🏻';
  }
}

function animate1() {
  document.querySelector('#blah1').classList.add('animateElement');
  setTimeout(() => {
    document.querySelector('#blah1').classList.remove('animateElement');
  }, 1500);
}
function animate2() {
  document.querySelector('#previewImage').classList.add('animateElement');
  setTimeout(() => {
    document.querySelector('#previewImage').classList.remove('animateElement');
  }, 1500);
}

function setPlayer1Name() {
  var player1NameDiv = document.getElementById('player1Name');
  player1NameDiv.innerHTML = document.getElementById('p1nameInput').value;
  document.getElementById('divSetPlayer1Name').style.display = 'none';
}

document.querySelector('#player1Name').style.color = 'white';

function setPlayer2Name() {
  var player2NameDiv = document.getElementById('player2Name');
  player2NameDiv.innerHTML = document.getElementById('p2nameInput').value;
  document.getElementById('divSetPlayer2Name').style.display = 'none';
}

document.querySelector('#player2Name').style.color = 'white';

function readURLImage1() {
  var previewImage1 = document.querySelector('#blah1');
  var fileImage1 = document.querySelector('input[type=file]').files[0];
  var readerImage1 = new FileReader();
  readerImage1.onloadend = function () {
    previewImage1.src = readerImage1.result;
  };

  if (fileImage1) {
    readerImage1.readAsDataURL(fileImage1);
  } else {
    previewImage1.src = '';
  }
}

function readURLImage2() {
  var imageInput = document.getElementById('imageInput');
  var previewImage = document.getElementById('previewImage');
  imageInput.addEventListener('change', function () {
    var file = imageInput.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
