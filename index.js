

var countPlayers = parseInt($(".js-count-players").text());
var playerArray = [];

function PlayerObj(playerNanmer, diceImg) {
  this.playerNamber = playerNanmer;
  this.diceImg = diceImg;
  this.getRandomDiceImg = function(){
    getRundomDicePath();
  }
}

getNewPlayerArray(countPlayers);
updatePlayers();

$(".js-update-button").on("click", function(){
  $(".js-update-button").addClass("js-update-button-animation");
  updatePlayers();
  setTimeout(function(){
    $(".js-update-button").removeClass("js-update-button-animation");
  }, 200);
})


function updatePlayers(){
  for (var i = 0; i < playerArray.length; i++) {
    playerArray[i].playerNamber.text("Player " + (i + 1));
    playerArray[i].diceImg.attr("src", getRundomDicePath());
  }
}


function getNewPlayerArray(currentCountPlayers) {
  for (var i = 0; i < currentCountPlayers; i++) {
    playerArray[i] = new PlayerObj(hetHtmlPlayerNumber(), getHtmImg());
  }
}

function getHtmImg(){
  return $(".js-dice-img");
}

function hetHtmlPlayerNumber(){
  return $(".js-player-number");
}

function getRundomDicePath() {
  var runsomNumber = Math.floor(Math.random() * 6) + 1;
  var rundomImgPath = "D:/WebDev_Learning/WebSite_RandomDice/images/dice" + runsomNumber + ".png";
  return rundomImgPath;
}

// var setprop = declaration.setProperty("background-color", "yellow");

// modifyStyleShit();
//
// function modifyStyleShit(){
//   const localStyleSheet = document.styleSheets[0];
//   console.log(localStyleSheet);
//   let styleSelector;
//
//   // for (var i = 0; i < localStyleSheet.cssRules.length; i++) {
//   //   if(localStyleSheet.cssRules[i].selectorText === "js-update-button-animation"){
//   //     styleSelector = localStyleSheet.cssRules[i];
//   //   }
//   // }
//   //
//   // styleSelector.style.setProperty("color", "blue");
// }

// $(document).ready(function() {
//   $('.count').prop('disabled', true);
//
//   $(document).on('click', '.plus', function() {
//     $('.count').val(parseInt($('.count').val()) + 1);
//   });
//
//   $(document).on('click', '.minus', function() {
//     $('.count').val(parseInt($('.count').val()) - 1);
//     if ($('.count').val() == 0) {
//       $('.count').val(1);
//     }
//   });
// });
