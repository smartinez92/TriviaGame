
var panel = $('#quiz-area');

$(document).on('click', '#start', function(){
  game.start();
});

$(document).on('click', '#done', function(){
  game.done();
});

//(Questions & Answers) - 
var questions = [{
  question: "Who is Zelda?",
  answers: ["Princess of Hyrule", "Boy in Green clothes", "The horse", "Evil Villain"],
  correctAnswer: "Princess of Hyrule"
}, {
  question: "What year did Mario Kart 64 release in America?",
  answers: ["1999", "1994", "1992", "1996"],
  correctAnswer: "1996"
}, {
  question: "Who is Mario's brother?",
  answers: ["Yoshi", "Wario", "Luigi", "Toad"],
  correctAnswer: "Luigi"
}, {
  question: "What is Donkey Kong?",
  answers: ["Donkey", "Dolphin", "Rhino", "Ape"],
  correctAnswer: "Ape"
}, {
  question: "What color is Kirby?",
  answers: ["Blue", "Pink", "Yellow", "Black"],
  correctAnswer: "Pink"
}, {
  question: "What is the correct order to play the Song of Storms?",
  answers: ["A v ^", "A v A", "v < A", "< > <"],
  correctAnswer: "A v ^"
}, {
  question: "Who is Ash's main pokemon?",
  answers: ["Pikachu", "Eevee", "Magikarp", "Charmander"],
  correctAnswer: "Pikachu"
}, {
  question: "What is my favorite game of all time?",
  answers: ["Ocarina of Time", "Ocarina of Time", "Ocarina of Time"],
  correctAnswer: "Ocarina of Time"
}];

//Count down function that starts at 120 seconds.

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      
      game.done();
    }
  },


  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
		panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    panel.append('<button id="done">Done</button>');
  },

//Check the correct answers.

  done: function(){

    $.each($("input[name='question-0']:checked"), function(){
       if ($(this).val() == questions[0].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-1']:checked"), function(){
       if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-2']:checked"), function(){
       if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-3']:checked"), function(){
       if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });  
    $.each($("input[name='question-4']:checked"), function(){
       if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-5']:checked"), function(){
       if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-6']:checked"), function(){
       if ($(this).val() == questions[6].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
	$.each($("input[name='question-7']:checked"), function(){
       if ($(this).val() == questions[7].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

//Answers displayed.

    this.results();
  },


    results:function(){
      clearInterval(timer);

      $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');

    }


  };