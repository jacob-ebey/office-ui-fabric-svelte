import App from './App.html';

function autorun() {
  new App({
    target: document.body
  });
}

if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;
