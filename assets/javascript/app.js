
$(document).ready(function(){
  
    // event listeners
    $("#timeRemain").hide();
    $("#start").on('click', startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  })
  var start = $("start");
var menu = $("#menu");
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
          q1: 'A Dewgong with Thick Fat is most resistant to what type?',
          q2: 'Which Pokemon is capable of doing the most damage in the entire game under the right circumstances?',
          q3: 'A Choice Band Swampert with max attack investment and an Adamant nature is fighting a Ninetales with Drought. This sun is active as a result. The Ninetales has a Timid nature, 120 points invested into defense and 252 points invested into HP. How much damage does Swampert do to Ninetales with a Waterfall?',
          q4: 'How much damage does 2 layers of Spikes do to an opponent?',
          q5: 'Which of these type combinations has the most amount of double resistances?',
          q6: 'Which of these moves has the highest priority?'
          q7: 'In Generation I, if a Sandslash uses Sword Dance 3 times and then uses Slash on a Snorlax, how much damage will it do?'
        },
        options: {
          q1: ['Ice', 'Fire', 'Water', 'Steel'],
          q2: ['Stakataka', 'Mega Mawile', 'Mega Mewtwo X', 'Shuckle'],
          q3: ['59.7 - 70.5%', '58.8 - 70.2%', '89.1 - 105.1%', '120 - 141.1%'],
          q4: ['12.5%', '21.2%', '25%', '16.67%'],
          q5: ['Water/Dragon','Electric/Steel','Steel/Flying','Fire/Steel'],
          q6: ['Vacuum Wave', 'Vital Throw', 'Ally Switch', 'Baby-Doll Eyes']
          q7: ['24.4 - 28.8%', '83.5 - 98.2%', '80.4 - 94.6%', '26.9 - 31.7%']
        },
        answers: {
          q1: 'Ice',
          q2: 'Shuckle',
          q3: '58.8 - 70.2%',
          q4: '16.67%',
          q5: 'Fire/Steel',
          q6: 'Ally Switch',
          q7: '24.4 - 28.8%'
        }
}
//calls start Game function
startGame();

//function for starting game: show time remaining
//random points for gems to be added to scoreDisplay
function startGame() {
    timeRemain = 30;
    CountdownInSeconds();

}
//function to countdown in seconds 
function countdownInSeconds() {
    document.getElementById("#secondsCountdown").innerHTML = "Time Remaining: " + timeRemain; alert("Yo");
//$("#start").click(function(){
  //     "Time remaining: " + timeRemain; 
//});