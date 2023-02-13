//score variable
var score = 0;
//to check whether your input is correct
function checkButton() {
  //if answer is correct, sumbit correct and add 1 to score, disable button
  if(document.getElementById('Art').checked) {
      document.getElementById("Correct").innerHTML
          = "Submitted";
      score++;
      document.getElementById("button1").disabled = true;
  }
  //if answer is incorrect, sumbit incorrect, disable button
  else if(document.getElementById('Dance').checked) {
      document.getElementById("Incorrect").innerHTML
          = "Submitted";
      document.getElementById("button1").disabled = true;
  }
  //if answer is incorrect, sumbit incorrect, disable button
  else if(document.getElementById('Music').checked) {
      document.getElementById("Incorrect").innerHTML
          = "Submitted";
      document.getElementById("button1").disabled = true;
  }
  //if answer is incorrect, sumbit incorrect, disable button
  else if(document.getElementById('Photography').checked) {
      document.getElementById("Incorrect").innerHTML
          = "Submitted";
      document.getElementById("button1").disabled = true;
  }

        }
  //to check whether your input is correct
  function checkButton2() {
    //if answer is incorrect, sumbit incorrect, disable button
    if(document.getElementById('Orange').checked) {
        document.getElementById("Incorrect2").innerHTML
            = "Submitted";
        document.getElementById("button2").disabled = true;
    }
    //if answer is incorrect, sumbit incorrect, disable button
    else if(document.getElementById('Blue').checked) {
        document.getElementById("Incorrect2").innerHTML
            = "Submitted";
        document.getElementById("button2").disabled = true;
    }
    //if answer is correct, sumbit correct and add 1 to score, disable button
    else if(document.getElementById('Purple').checked) {
        document.getElementById("Correct2").innerHTML
            = "Submitted";
        score++;
        document.getElementById("button2").disabled = true;
    }
    //if answer is incorrect, sumbit incorrect, disable button
    else if(document.getElementById('Green').checked) {
        document.getElementById("Incorrect2").innerHTML
            = "Submitted";
        document.getElementById("button2").disabled = true;
    }

          }
  //to check whether your input is correct
  function checkButton3() {
    //if answer is incorrect, sumbit incorrect, disable button
    if(document.getElementById('Winter').checked) {
        document.getElementById("Incorrect3").innerHTML
            = "Submitted";
        document.getElementById("button3").disabled = true;
    }
    //if answer is incorrect, sumbit incorrect, disable button
    else if(document.getElementById('Fall').checked) {
        document.getElementById("Incorrect3").innerHTML
            = "Submitted";
        document.getElementById("button3").disabled = true;
    }
    //if answer is incorrect, sumbit incorrect, disable button
    else if(document.getElementById('Spring').checked) {
        document.getElementById("Incorrect3").innerHTML
            = "Submitted"
        document.getElementById("button3").disabled = true;
    }
    //if answer is correct, sumbit correct and add 1 to score, disable button
    else if(document.getElementById('Summer').checked) {
        document.getElementById("Correct3").innerHTML
            = "Submitted";
        score++;
        document.getElementById("button3").disabled = true;
    }

          }
  //to check whether your input is correct
  function checkButton4() {
    //if answer is incorrect, sumbit incorrect, disable button
    if(document.getElementById('Guitar').checked) {
        document.getElementById("Incorrect4").innerHTML
            = "Submitted";
        document.getElementById("button4").disabled = true;
    }
    //if answer is correct, sumbit correct and add 1 to score, disable button
    else if(document.getElementById('Piano').checked) {
        document.getElementById("Correct4").innerHTML
            = "Submitted";
        score++;
        document.getElementById("button4").disabled = true;
    }
    //if answer is incorrect, sumbit incorrect, disable button
    else if(document.getElementById('Trumpet').checked) {
        document.getElementById("button4").innerHTML
            = "Submitted"
            document.getElementById("button4").disabled = true;
    }
    //if answer is incorrect, sumbit incorrect, disable button
    else if(document.getElementById('Flute').checked) {
        document.getElementById("Incorrect4").innerHTML
            = "Submitted";
            document.getElementById("button4").disabled = true;
    }

          }
  //to check your score from score variable
  function checkScore() {
    //sumbit score
    if(score == 0) {
      document.getElementById('Score').innerHTML
          = "0/4 >:(";
    }
    //sumbit score
    else if(score == 1) {
      document.getElementById('Score').innerHTML
          = "1/4 :(";
    }
    //sumbit score
    else if(score == 2) {
      document.getElementById('Score').innerHTML
          = "2/4 :|";
    }
    //sumbit score
    else if(score == 3) {
      document.getElementById('Score').innerHTML
          = "3/4 :)";
    }
    //sumbit score
    else if(score == 4) {
      document.getElementById('Score').innerHTML
          = "4/4 :D";
    }


  }
  //i got this from W3 schools
//make slide number = 1
  let slideIndex = 1;
showSlides(slideIndex);

//increase slide number
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//make slide number = number it is on
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//make slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
