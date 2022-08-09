var elem = document.getElementById("box");
var button = document.getElementById("btnmore/less")
function slide() {
  elem.classList.toggle('hide');
  elem.classList.toggle('active');
  if (elem.classList == 'box hide') {
    button.innerHTML = 'More';
  } 
  if (elem.classList == 'box active') {
    button.innerHTML = 'Less';
  }
}

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
    }
  }
}  
  window.addEventListener("scroll", reveal);


  function foo () {
  var count = document.getElementById('subject').value.length;
  var min_count = document.getElementById('current_comment');
  min_count.innerHTML = count;
  }

  setInterval(foo, 1);