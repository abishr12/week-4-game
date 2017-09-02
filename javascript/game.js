var goalNum
var scoreNum
var winNum = 0
var loseNum = 0

function replay() {
  if (scoreNum === goalNum) {
    alert("You win")
    winNum++
    console.log(winNum + "<----Win Number")
    $("#wins").text("Wins: " + winNum)
    startGame()
  } else if (scoreNum > goalNum) {
    alert("You lose")
    loseNum++
    console.log(loseNum + "<----Loss Number")
    $("#losses").text("Losses: " + loseNum)
    startGame()
  }
}

function startGame() {
  var randomVal = Math.floor(Math.random() * 5 + 1)
  var randomVal2 = Math.floor(Math.random() * 5 + 1)
  var randomVal3 = Math.floor(Math.random() * 5 + 1)
  var randomVal4 = Math.floor(Math.random() * 5 + 1)
  var randomNum = Math.floor(Math.random() * 50 + 20)

  goalNum = Math.floor(Math.random() * 50 + 30)
  scoreNum = Math.floor(Math.random() * 15 + 10)
  $(document).ready(function() {
    $(".jewel").on("click", function() {
      replay()
    })

    $("#goal-number").text(goalNum)

    $("#button-1").on("click", function() {
      $("#button-1").val(randomVal)
      scoreNum = scoreNum + randomVal

      $("#score-number").text(scoreNum)

      console.log(scoreNum)
    })

    $("#button-2").on("click", function() {
      $("#button-2").val(randomVal2)
      scoreNum = scoreNum + randomVal2

      $("#score-number").text(scoreNum)
      console.log(scoreNum)
    })

    $("#button-3").on("click", function() {
      $("#button-3").val(randomVal3)
      scoreNum = scoreNum + randomVal3

      $("#score-number").text(scoreNum)
      console.log(scoreNum)
    })

    $("#button-4").on("click", function() {
      $("#button-4").val(randomVal4)
      scoreNum = scoreNum + randomVal4

      $("#score-number").text(scoreNum)
      console.log(scoreNum)
    })
  })
}
startGame()
