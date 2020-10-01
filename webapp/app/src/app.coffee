
class App

  text: 'HELLO WORLD'

  constructor: ->
    @setup()
    @run()

  setup: ->
    el = document.createElement 'h1'
    el.style.textAlign = 'center'
    el.style.font = '80px Helvetica'
    el.style.fontWeight = 'bold'
    @letters = []
    for letter in @text
      letterEl = document.createElement 'span'
      letterEl.textContent = letter
      @letters.push letterEl
      el.appendChild letterEl
    document.body.appendChild el

  run: ->
    @timer = setInterval @tick, 1000 / 30
    @start = new Date().getTime()
    @tick()

  stop: ->
    clearInterval @timer
    @timer = null

  tick: =>
    for el, i in @letters
      a = Math.sin (new Date() / 300) - 5 * (i / @letters.length)
      a = (a + 1) / 2
      rgb = [parseInt(a * 255), 0, 0]
      el.style.color = "rgb(#{ rgb.join(',') })"
      el.style.textShadow = "0 0 #{ parseInt a * 6 }px red"

exports.App = App;
