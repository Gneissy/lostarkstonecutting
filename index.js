
// Spark
generateRandomNumber();

// Default Variables
diamond1Counter = 1;
diamond2Counter = 1;
diamond3Counter = 1;
successCounter1 = 0;
successCounter2 = 0;
successCounter3 = 0;
var successRate = 75;
var randomNumber;

// Functions
function generateRandomNumber(){ // Generates a random number between 1-100
  var rngNumber = Math.floor(Math.random()*100)+1;
  randomNumber = rngNumber;
}

function nextStep(){ // To proceed next faceting process
  generateRandomNumber();
  // When it finished:
  if(diamond1Counter===11 && diamond2Counter===11 && diamond3Counter===11){
    alert("done!");
  }
}

function restartGame(){ // Reset everything to start over
  diamond1Counter = 1;
  diamond2Counter = 1;
  diamond3Counter = 1;
  successCounter1 = 0;
  successCounter2 = 0;
  successCounter3 = 0;
  successRate = 75;
  $(".eng1Diamonds").css("background-color","#202124"); // Reset background colors of Eng1
  $(".eng2Diamonds").css("background-color","#202124"); // Reset background colors of Eng2
  $(".eng3Diamonds").css("background-color","#202124"); // Reset background colors of Eng3

  $(".eng1Diamonds").animate({opacity:0.8},{duration:100}); // Reset opacity of eng1 diamonds
  $(".eng2Diamonds").animate({opacity:0.8},{duration:100}); // Reset opacity of eng2 diamonds
  $(".eng3Diamonds").animate({opacity:0.8},{duration:100}); // Reset opacity of eng3 diamonds

  $(".succesRateLabel1").html("<h4 class='hidden'><div class='dia filled'></div> x1</h4>"); // Reset Eng1 success label
  $(".succesRateLabel2").html("<h4 class='hidden'><div class='dia filled'></div> x1</h4>"); // Reset Eng2 success label
  $(".succesRateLabel3").html("<h4 class='hidden'><div class='dia-red filled-red'></div> x1</h4>"); // Reset Eng3 success label

  $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
  $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Success rate updated
}



// Event handling
  $(".eng1FacetButton").click(function(){ // Click event for faceting the 1st engraving
    if(diamond1Counter<11){
      // Success of Engraving 1
      if(randomNumber<=successRate){
        if(successRate > 25){ // If success rate is more than 25, decrease 10%
          successRate-=10;
        }
        $(".eng1Diamonds.faDiamond"+diamond1Counter).css("background-color","#1655b5"); // Bg color changed to blue
        $(".eng1Diamonds.faDiamond"+diamond1Counter).animate({opacity:1},{duration:100}); // Opacity fulled
        $(".succesRateLabel1.hidden").removeClass("hidden"); // Eng1 label activated
        $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
        $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Failure rate updated
        var sound = new Audio ("audio/engCuttingSuccess.mp3"); // Success Audio when succeeded
        sound.play();
        diamond1Counter++; // To proceed next diamond
        successCounter1++; // Succeeded diamond count +1
        $(".succesRateLabel1").html("<div class='dia filled'></div> x"+successCounter1); // Eng1 label updated. exp: x2
      }
      //Failure of Engraving 1
      else{
        if(successRate < 75){ // If success rate is less than 75, rise 10%
          successRate+=10;
        }
        $(".eng1Diamonds.faDiamond"+diamond1Counter).animate({opacity:0.25},{duration:100}); // Opacity is lowered because it's failed
        $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
        $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Success rate updated
        var sound = new Audio ("audio/engCuttingFailure.mp3"); // Failure Audio when succeeded
        sound.play();
        diamond1Counter++; // To proceed next diamond
      }
      nextStep();
    }
  });

  $(".eng2FacetButton").click(function(){ // Click event for faceting the 2nd engraving
    if(diamond2Counter<11){
      // Success of Engraving 2
      if(randomNumber<=successRate){
        if(successRate > 25){
          successRate-=10;
        }
        $(".eng2Diamonds.faDiamond"+diamond2Counter).css("background-color","#1655b5"); // Bg color changed to blue
        $(".eng2Diamonds.faDiamond"+diamond2Counter).animate({opacity:1},{duration:100}); // Opacity fulled
        $(".succesRateLabel2.hidden").removeClass("hidden"); // Eng2 label activated
        $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
        $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Failure rate updated
        var sound = new Audio ("audio/engCuttingSuccess.mp3"); // Success Audio when succeeded
        sound.play();
        diamond2Counter++; // To proceed next diamond
        successCounter2++; // Succeeded diamond count +1
        $(".succesRateLabel2").html("<div class='dia filled'></div> x"+successCounter2); // Eng2 label updated. exp: x3
      }
      //Failure of Engraving 2
      else{
        if(successRate < 75){ // If success rate is less than 75, rise 10%
          successRate+=10;
        }
        $(".eng2Diamonds.faDiamond"+diamond2Counter).animate({opacity:0.25},{duration:100});// Opacity is lowered because it's failed
        $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
        $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Failure rate updated
        var sound = new Audio ("audio/engCuttingFailure.mp3"); // Failure Audio when succeeded
        sound.play();
        diamond2Counter++; // To proceed next diamond
      }
      nextStep();
    }
  });

  $(".eng3FacetButton").click(function(){ // // Click event for faceting the 3rd engraving
    if(diamond3Counter<11){
      // Success of Engraving 3
      if(randomNumber<=successRate){ // If success rate is more than 25, decrease 10%
        if(successRate > 25){
          successRate-=10;
        }
        $(".eng3Diamonds.faDiamond"+diamond3Counter).css("background-color","#f02c4f"); // Bg color changed to red
        $(".eng3Diamonds.faDiamond"+diamond3Counter).animate({opacity:1},{duration:100}); // Opacity fulled
        $(".succesRateLabel3.hidden").removeClass("hidden"); // Eng3 label activated
        $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
        $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Failure rate updated
        var sound = new Audio ("audio/engCuttingSuccess.mp3"); // Success Audio when succeeded
        sound.play();
        diamond3Counter++; // To proceed next diamond
        successCounter3++; // Succeeded diamond count +1
        $(".succesRateLabel3").html("<div class='dia-red filled-red'></div> x"+successCounter3); // Eng3 label updated. exp: x6
      }
      //Failure of Engraving 3
      else{
        if(successRate < 75){
          successRate+=10;
        }
        $(".eng3Diamonds.faDiamond"+diamond3Counter).animate({opacity:0.25},{duration:100}); // Opacity is lowered because it's failed
        $(".rateLabelSuccess").text("Success Rate "+successRate+"%"); // Success rate updated
        $(".rateLabelFailure").text("Failure Rate "+successRate+"%"); // Success rate updated
        var sound = new Audio ("audio/engCuttingFailure.mp3"); // Failure Audio when succeeded
        sound.play();
        diamond3Counter++; // To proceed next diamond
      }
      nextStep();
    }
  });

  $(".restartButton").click(function(){ // Click event on the restart button
    restartGame();
  });
