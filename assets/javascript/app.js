const Questions = [
  {
    question: "In Generation I, if a Sandslash uses Sword Dance 3 times and then uses Slash on a Snorlax, how much damage will it do?",
    answers: {
      a: '24.4 - 28.8%',
      b: '83.5 - 98.2%',
      c: '80.4 - 94.6%',
      d: '27.1 - 31.9%'
    },
    correctAnswer: "a"
  },
  {
    question: "A Choice Band Swampert with max attack investment and an Adamant nature is fighting a Ninetales with Drought. This sun is active as a result. The Ninetales has a Timid nature, 120 points invested into defense and 252 points invested into HP. How much damage does Swampert do to Ninetales with a Waterfall?",
    answers: {
      a: '89.1 - 105.1%',
      b: '120 - 141.1%',
      c: '58.8 - 70.2%',
      d: '59.7 - 70.5%'
    },
    correctAnswer: "d"
  },
  {
    question: "How much damage does 2 layers of Spikes do to a grounded opponent?",
    answers: {
      a: '21.2%',
      b: '16.67%',
      c: '25%',
      d: '12.5%'
    },
    correctAnswer: "b"
  },
  {
    question: "Which of these type combinations has the most amount of double resistances?",
    answers: {
      a: 'Water/Dragon',
      b: 'Electric/Steel',
      c: 'Fire/Steel',
      d: 'Steel/Flying'
    },
    correctAnswer: "c"
  },
  {
    question: "Which of these moves has the highest priority?",
    answers: {
      a: 'Dragon Rush',
      b: 'Baby-Doll Eyes',
      c: 'Ally Switch',
      d: 'Quick Attack'
    },
    correctAnswer: "c"
  },
  {
    question: "Under the right circumstances, one of these Pokemon is capable of doing the highest possible damage in-game; which one is it?",
    answers: {
      a: 'Stakataka',
      b: 'Shuckle',
      c: 'Mega Mewtwo X',
      d: 'Mega Mewtwo Y'
    },
    correctAnswer: "b"
  },


]

//$("#timeRemain").hide();
//$(".lead").hide();
$("#results").hide();
$("#submit").hide();
$("#start").on('click', function () { startTimer() });
// $(document).on('click' , '.option', Questions.guessChecker);

function renderquestions() {
  $("#Questions").empty();
  for (var i = 0; i < Questions.length; i++) {
    var containment = $("<div>");
    containment.attr("data-name", Questions[i]);
    containment.text(Questions[i]["question"]);
    Answers = Questions[i]["answers"];
    $("#Answers").empty();
    // alert(Answers.length);
    containment.attr("id", "answercontainer")
    
    $.each(Answers, function (k, v) {
      var answercontainment = $("<div>");
      var answerinput = '<input type="radio" data-id="' + i + '" value="' + k + '">' + v;
      //      var test = $(this)
      //  test.on('click', function() {
        var test = $(this)
        console.log(test)
        // console.log(test)
        //})
        // var answerinput = Answers[k];
      answercontainment.html(answerinput);
      containment.append(answercontainment);
    });
    $("#Questions").append(containment);
  }

  var i = 200;
  setInterval(function () {
    $("#stopWatch").html(i);
    i--;
    if (i === -2) {
      $("#results").show();
      $("#submit").hide();
      $("#stopWatch").hide();
      $("#Questions").hide();
      $("#Answers").hide();
      $("#timeRemain").hide();
      console.log("Time's up!");
    }
  }, 1000);


}

function checkScore() {
  for (i = 0; i < Questions.length; i++) {
    console.log(Questions[i].correctAnswer)
    //get variable with correct answer letter in it (DONE)
    //find input with correct answer letter as value and this question key as name (DONE)
    //see if the above input is checked and if yes then they got this question right so add to some score variable
    //if no, then let's loop through all of the inputs that have a name with the question key and for each one see if it is answered
    //if none of them are answered then the user didnt answer this question at all
    //if one of them is answered then the user got this wrong
  }
}


var timeRemain = 30;
function startTimer() {
  renderquestions();
  $("#start").hide();
  $('#timeRemain').show();
  $('#timer').show();
  $('#Questions').show();
  $("#submit").show();
}

$("#submit").on('click', function () {
  var userAnswers = $("#answercontainer").children("input:checked")
  console.log(userAnswers);
  checkScore();
  for (var i = 0; i < Questions.length; i++) {
    //if (value === Questions[i].correctAnswer) {
    //  }
    // else {
    //   }
  }
  $("#results").show();
  $("#submit").hide();
  $("#stopWatch").hide();
  $("#Questions").hide();
  $("#Answers").hide();
  $("#timeRemain").hide();
  console.log("Done!");
});
