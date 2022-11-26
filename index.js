var countPlayers = $(".js-count-players");
var diceSectionHtml = $("._dice-section");
var playerArray = [];

function PlayerObj(playerNanmer, diceImg, playerHimlDiv) {
  this.playerNamber = playerNanmer;
  this.diceImg = diceImg;
  this.playerHimlDiv = playerHimlDiv;

  this.removePlayerHtml = function() {
    if (this.playerHimlDiv != null) {
      this.playerHimlDiv.remove();
    }
  }
  this.getRandomDiceImg = function() {
    getRundomDicePath();
  }
}

getNewPlayerArray(parseInt(countPlayers.text()));

// Event updating button and animation button
$(".js-update-button").on("click", function() {
  $(".js-update-button").addClass("js-update-button-animation");
  updatePlayers();
  setTimeout(function() {
    $(".js-update-button").removeClass("js-update-button-animation");
  }, 200);
})

function updatePlayers() {
  for (var i = 0; i < playerArray.length; i++) {
    playerArray[i].diceImg.src = getRundomDicePath();
  }
}

function getRundomDicePath() {
  var runsomNumber = Math.floor(Math.random() * 6) + 1;
  var rundomImgPath = "/WebSite_RandomDice/images/dice" + runsomNumber + ".png";
  return rundomImgPath;
}
//------


// Add and subtract 1 players count
$(".js-count-plus").on("click", function() {
  countPlayers.text(parseInt(countPlayers.text()) + 1);
  getNewPlayerArray(parseInt(countPlayers.text()));
})
$(".js-count-minus").on("click", function() {
  if (parseInt(countPlayers.text()) > 1) {
    countPlayers.text(parseInt(countPlayers.text()) - 1);
    getNewPlayerArray(parseInt(countPlayers.text()));
  }
})

function getNewPlayerArray(currentcountPlayers) {
  if (playerArray.length != 0) {
    for (var i = 0; i < playerArray.length; i++) {
      playerArray[i].removePlayerHtml();
    }
    playerArray = [];
  }

  for (var i = 0; i < currentcountPlayers; i++) {
    var curentPlayerHtml = createPlayerHtml();
    var newPlayer = new PlayerObj(getHtmlPlayerNumber(curentPlayerHtml), getHtmImg(curentPlayerHtml), curentPlayerHtml);
    newPlayer.playerNamber.textContent = "Player " + (i + 1);
    playerArray[i] = newPlayer;
  }
  updatePlayers();
}

function createPlayerHtml() {
  var htmlDiv = $("<div class='col-4 _dice-centr js-player'>  <h3 class='js-player-number'>Player 1</h3>   <img class='_dice-image js-dice-img' src='/WebSite_RandomDice/images/dice6.png' alt='dice image'>   </div>")
    .appendTo("._dice-section");
  return htmlDiv[0];
  // <div class="col-lg-4 col-md-6 col-sm-6 _dice-centr js-player">
  //   <h3 class="js-player-number">Player 1</h3>
  //   <img class="_dice-image js-dice-img" src="D:/WebDev_Learning/WebSite_RandomDice/images/dice6.png" alt="dice image">
  // </div>
}

function getHtmlPlayerNumber(playerHtmlDiv) {
  return playerHtmlDiv.getElementsByClassName("js-player-number")[0];
}

function getHtmImg(playerHtmlDiv) {
  return playerHtmlDiv.getElementsByClassName("js-dice-img")[0];
}
//-------

updatePlayers();
