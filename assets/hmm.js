$("#timeRemain").hide();
$("#start").on('click', function(){startTimer()});
$(document).on('click' , '.option', Questions.guessChecker);

var timeRemain = 30;
function startTimer() {
  $("#start").hide();
  $('#timer').show();
  $('#Questions').show();

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
        }
    },
    {
        question: "Under the right circumstances, one of these Pokemon is capable of doing the highest possible damage in-game; which one is it?",
        answers: {
            a: 'Stakataka',
            b: 'Shuckle',
            c: 'Mega Mewtwo X',
            d: 'Mega Mewtwo Y'
        }
    },

  ]};