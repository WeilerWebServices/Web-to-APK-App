
if (console == undefined)
  var console = {log: Function(), warn: Function(), error: Function()};

var App = require('./app.coffee').App;

function main() {
  window.app = new App();
};

// DOMReady - from the MooTools javascript framework (w/o mootools specific dependencies)
var ready,
  loaded,
  checks = [],
  shouldPoll,
  timer,
  testElement = document.createElement('div');

var domready = function() {
  clearTimeout(timer);
  if (ready) return;
  ready = true;
  document.removeEventListener('DOMContentLoaded', domready)
  document.removeEventListener('readystatechange', check);
  main();
};

var check = function(){
  for (var i = checks.length; i--;) if (checks[i]()){
    domready();
    return true;
  }
  return false;
};

var poll = function(){
  clearTimeout(timer);
  if (!check()) timer = setTimeout(poll, 10);
};

document.addEventListener('DOMContentLoaded', domready);

/*<ltIE8>*/
// doScroll technique by Diego Perini http://javascript.nwbox.com/IEContentLoaded/
// testElement.doScroll() throws when the DOM is not ready, only in the top window
var doScrollWorks = function(){
  try {
    testElement.doScroll();
    return true;
  } catch (e){}
  return false;
};
// If doScroll works already, it can't be used to determine domready. e.g. in an iframe
if (testElement.doScroll && !doScrollWorks()){
  checks.push(doScrollWorks);
  shouldPoll = true;
}
/*</ltIE8>*/

if (document.readyState) checks.push(function(){
  var state = document.readyState;
  return (state == 'loaded' || state == 'complete');
});

if ('onreadystatechange' in document) document.addEventListener('readystatechange', check);
else shouldPoll = true;

if (shouldPoll) poll();

window.addEventListener('load', domready);
