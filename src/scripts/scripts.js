document.addEventListener("DOMContentLoaded", function() {
  var questionHeaders = document.querySelectorAll('.question-header');

  questionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
          var answer = this.nextElementSibling;
          var buttonImage = this.querySelector('button img');

          // Alternar a visibilidade da resposta
          if (answer.classList.contains('show')) {
              answer.classList.remove('show');
              buttonImage.src = './assets/Icon Plus.svg';
            } else {
              answer.classList.add('show');
              buttonImage.src = './assets/minus.svg';
          }
      });
  });
});