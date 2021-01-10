var x = document.querySelectorAll(".drum");

// For Playing Drum sound on clicking using makesound function

for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    var innerbuttonHTML = this.innerHTML;
    makeSound(innerbuttonHTML);
    buttonAnimation(innerbuttonHTML);
  });
}

// For Playing Drum sound on pressing keyboard key using makesound function

document.addEventListener("keydown", function () {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    default:
      console.log("Error");
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
