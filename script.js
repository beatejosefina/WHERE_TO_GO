
$(function () {
  $('.resultSection').hide()

  /*List of museums*/
  var options = ['Skansen', 'Vasamuseet', 'Nationalmuseum', 'Naturhistoriska riskmuseet', 'Moderna museet', 'Tekniska museet', 'Nordiska museet', 'Stadsmuseet', 'Livrustkammaren', 'Historiska museet', 'Sjöhistoriska museet' ];

  /*functionallty related to the submit button*/
  var submit = function () {
    $('.intro').text("Nå, det blir en eftermiddag på")
    $('.resultSection').css('display', 'flex')
    $('.naVars').hide()
    var winner = options[Math.floor(Math.random() * options.length)]
    console.log(winner)
    $('.resultSection').text(winner)
  }
  $('.submit').click(submit)
})