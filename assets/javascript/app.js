$(document).ready(function(){
  
    $("#timeRemain").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  })

  trivia.currentSet = 0;
  trivia.correct = 0;
  trivia.incorrect = 0;
  trivia.unanswered = 0;
  clearInterval(trivia.timeRemain);

  $('#game').show();
    
    $('#results').html('');
    
    $('#timeRemain').text(trivia.timeRemain);

var timeRemain = 30;
function startTimer() {
    start.hide();
    showTimer.show();
    var trivia = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timeRemain: 0,
        timerOn: false,
        timerId : '',


        
        questions: {
          q1: "In Generation I, if a Sandslash uses Sword Dance 3 times and then uses Slash on a Snorlax, how much damage will it do?",
          q2: "Which Pokemon is capable of doing the most damage in the entire game under the right circumstances?",
          q3: "A Choice Band Swampert with max attack investment and an Adamant nature is fighting a Ninetales with Drought. This sun is active as a result. The Ninetales has a Timid nature, 120 points invested into defense and 252 points invested into HP. How much damage does Swampert do to Ninetales with a Waterfall?",
          q4: "How much damage does 2 layers of Spikes do to an opponent?",
          q5: "Which of these type combinations has the most amount of double resistances?",
          q6: "Which of these moves has the highest priority?"
        },
        options: {
          q1: ['24.4 - 28.8%', '83.5 - 98.2%', '80.4 - 94.6%', '26.9 - 31.7%'],
          q2: ['Stakataka', 'Mega Mawile', 'Mega Mewtwo X', 'Shuckle'],
          q3: ['59.7 - 70.5%', '58.8 - 70.2%', '89.1 - 105.1%', '120 - 141.1%'],
          q4: ['12.5%', '21.2%', '25%', '16.67%'],
          q5: ['Water/Dragon','Electric/Steel','Steel/Flying','Fire/Steel'],
          q6: ['Vacuum Wave', 'Vital Throw', 'Ally Switch', 'Baby-Doll Eyes']
        },
        answers: {
          q1: '24.4 - 28.8%',
          q2: 'Shuckle',
          q3: '58.8 - 70.2%',
          q4: '16.67%',
          q5: 'Fire/Steel',
          q6: 'Ally Switch',
        }
}


$('#start').hide();

$('#TimeRemain').show();

trivia.nextQuestion();

trivia.timeRemain = 40;
$('#timeRemain').removeClass('last-seconds');
$('#timeRemain').text(trivia.timer);

if(!trivia.timerOn){
 trivia.timerId = setInterval(trivia.timerRunning, 4000);
}

var questionContent = Object.values(trivia.questions)[trivia.currentSet];
$('#question').text(questionContent);

var questionOptions = Object.values(trivia.options)[trivia.currentSet];
    
$.each(questionOptions, function(index, key){
  $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
})


};