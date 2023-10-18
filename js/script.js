/*** VARIABLES TO BE CHANGED EACH SEMESTER ***/

//function variables called at the end of include.js
function variables() {

  //In Footer: automatic term selection
  var year = (new Date()).getFullYear();
  var month = (new Date()).getMonth();
  if (month < 3) {
    term = "Winter Term " + (year - 1) + "/" + year;
  } else if (month > 8) {
    term = "Winter Term " + year + "/" + (year + 1)
  } else {
    term = "Summer Term " + year;
  }
  document.title = "Interaction Prototyping: " + term;
  document.getElementById("term").innerHTML = term;
  document.getElementById("copyright").innerHTML= year;


  //In Set up: Introduction: "Send your GitHub user names and your group's chosen name to: name_person"
  var el = document.getElementById('name_person');
  if (el != null) {
    document.getElementById("name_person").innerHTML = "Jonas Bender.";
  } else {
  }

  // In: Iteration 2: 8 HiFi Prototyping Task 8 Deadline
  var el = document.getElementById('deadline_task8');
  if (el != null) {
    document.getElementById("deadline_task8").innerHTML = "15.11.2021";
  } else {
  }

  // In: Iteration 2: 9 HiFi Heuristic Evaluation Task 9 Deadline
  var el = document.getElementById('deadline_task9');
  if (el != null) {
    document.getElementById("deadline_task9").innerHTML = "17.11.2021";
  } else {
  }

  // In: Iteration 4: 20 Presentation M4 Deadline GitHub Freeze (with time between M4 presentation and Github Freeze)
  var el = document.getElementById('deadline_task20');
  if (el != null) {
    document.getElementById("deadline_task20").innerHTML = "7 days (until 24.01.22 at 23:59:59)";
  } else {
  }


}

/*** NAVIGATION ***/

var acc = document.getElementsByClassName("accordion");
var acc2 = document.getElementsByClassName("active");
var acc3 = document.getElementsByClassName("section");
var i;
var j;

//function accordion called at the end of include.js
function accordion () {
  activeSection();
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      if (this.className === "accordion") {
        removeActive();

      }
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.toggle("active");

        if(this.firstElementChild.classList!=null) {
          this.firstElementChild.classList.toggle("fa-angle-down");
        }
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.classList.toggle("active");

        if(this.firstElementChild.classList!=null) {
          this.firstElementChild.classList.toggle("fa-angle-up");
        }
      }
    });
  }
}

function activeSection() {
  const $sections = Array.prototype.slice.call(document.querySelectorAll('.section'), 0);
  let currentURL = window.location.href;
  $sections.forEach(el => {
    if (el.href === currentURL) {
      el.classList.toggle('is-active');

      if(el.parentElement.parentElement.previousElementSibling.className === "accordion"){
        el.parentElement.parentElement.style.maxHeight = el.parentElement.parentElement.scrollHeight + "px";
      }
    }
  })
}

function removeActive () {
  for (j = 0; j < acc2.length; j++) {
    var panel2 = acc2[j].nextElementSibling;

    if(panel2.style.maxHeight) {
      panel2.style.maxHeight = null;
      acc2[j].classList.remove("active");

    }
  }
}

//function burger called at the end of include.js
function burger() {
  var navbarBurger = document.getElementById('navbar-burger');
  console.log(navbarBurger);

  // Check if there is a navbar burger
  if (navbarBurger) {
    console.log("click");
    // Add a click event
    document.getElementById("navbar-burger").addEventListener("click", function() {

      // Get the target from the "data-target" attribute
      const menu = document.getElementById("burger_menu");
      const content = document.getElementById("content");
      const navigation = document.getElementById("navigation");
      const footer = document.getElementById("footer");
      const title = document.getElementById("mobile_title");

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      navbarBurger.classList.toggle('is-active');
      menu.classList.toggle('is-hidden');
      content.classList.toggle('is-hidden');
      navigation.classList.toggle('is-hidden');
      footer.classList.toggle('is-hidden');
      title.classList.toggle('is-hidden');

    });
  }

};

/*** SCROLLING ***/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton = document.getElementById("myBtn");
    mybutton.style.display = "block";
    //  console.log(mybutton);
  } else {
    mybutton = document.getElementById("myBtn");
    mybutton.style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*** THEME ***/

//function theme called at the end of include.js
function theme() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  toggleSwitch.addEventListener('change', switchTheme, false);

  function switchTheme(e) {
    if (e.target.checked) {

      //Dark theme

      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
      document.getElementById("theme").innerHTML="";
      document.getElementById("theme").innerHTML="<i class='fas fa-moon'></i>";

      document.getElementById("logo_tum").innerHTML="<img src=\"/exercises_2.0/img/tum_dark.png\"/>";
      document.getElementById("logo_tum_footer").innerHTML="<img src=\"/exercises_2.0/img/tum_dark.png\"/>";

      if (document.getElementById('logo_tum_mobile') != null) {
        document.getElementById("logo_tum_mobile").innerHTML ="<img src=\"/exercises_2.0/img/tum.svg\"/>";
      }

      if (document.getElementById('schedule2020') != null) {
        document.getElementById("phase1").innerHTML ="<img src=\"/exercises_2.0/img/phase1_dark.png\"/>";
        document.getElementById("phase2").innerHTML ="<img src=\"/exercises_2.0/img/phase2_dark.png\"/>";
        document.getElementById("phase3").innerHTML ="<img src=\"/exercises_2.0/img/phase3_dark.png\"/>";
      }

      if (document.getElementById('spiral_picture') != null) {
        document.getElementById("spiral_picture").setAttribute('href', '/exercises_2.0/img/orga-spiral-new-dark.svg');
      }

      if (document.getElementById("git_stages") != null) {
        document.getElementById("git_stages").innerHTML = "<img src=\"/exercises_2.0/img/git-stages-dark.svg\"/>";
      }

      if (document.getElementById('tools') != null) {
        document.getElementById("tools").innerHTML ="<img src=\"/exercises_2.0/img/tools_dark.png\"/>";
      }


    } else {

      //Light theme

      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
      document.getElementById("theme").innerHTML="";
      document.getElementById("theme").innerHTML="<i class='fas fa-sun'></i>";

      document.getElementById("logo_tum").innerHTML="<img src=\"/exercises_2.0/img/tum.svg\"/>";
      document.getElementById("logo_tum_footer").innerHTML="<img src=\"/exercises_2.0/img/tum.svg\"/>";

      if (document.getElementById('logo_tum_mobile') != null) {
        document.getElementById("logo_tum_mobile").innerHTML ="<img src=\"/exercises_2.0/img/tum.svg\"/>";
      }

      if (document.getElementById('schedule2020') != null) {
        document.getElementById("phase1").innerHTML ="<img src=\"/exercises_2.0/img/phase1.png\"/>";
        document.getElementById("phase2").innerHTML ="<img src=\"/exercises_2.0/img/phase2.png\"/>";
        document.getElementById("phase3").innerHTML ="<img src=\"/exercises_2.0/img/phase3.png\"/>";
      }

      if (document.getElementById('spiral_picture') != null) {
        document.getElementById("spiral_picture").setAttribute('href', '/exercises_2.0/img/orga-spiral-new-backup.svg');
      }

      if (document.getElementById("git_stages") != null) {
        document.getElementById("git_stages").innerHTML = "<img src=\"/exercises_2.0/img/git-stages.svg\"/>";
      }

      if (document.getElementById('tools') != null) {
        document.getElementById("tools").innerHTML ="<img src=\"/exercises_2.0/img/tools.png\"/>";
      }

    }
  }

  //Get current theme
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      document.getElementById("theme").innerHTML="";
      document.getElementById("theme").innerHTML="<i class='fas fa-moon'></i>";

      document.getElementById("logo_tum").innerHTML="<img src=\"/exercises_2.0/img/tum_dark.png\"/>";
      document.getElementById("logo_tum_footer").innerHTML="<img src=\"/exercises_2.0/img/tum_dark.png\"/>";

      if (document.getElementById('logo_tum_mobile') != null) {
        document.getElementById("logo_tum_mobile").innerHTML ="<img src=\"/exercises_2.0/img/tum_dark.png\"/>";
      }


      if (document.getElementById('schedule2020') != null) {
        document.getElementById("phase1").innerHTML ="<img src=\"/exercises_2.0/img/phase1_dark.png\"/>";
        document.getElementById("phase2").innerHTML ="<img src=\"/exercises_2.0/img/phase2_dark.png\"/>";
        document.getElementById("phase3").innerHTML ="<img src=\"/exercises_2.0/img/phase3_dark.png\"/>";
      }

      if (document.getElementById('spiral_picture') != null) {
        document.getElementById("spiral_picture").setAttribute('href', '/exercises_2.0/img/orga-spiral-new-dark.svg');
      }

      if (document.getElementById("git_stages") != null) {
        document.getElementById("git_stages").innerHTML = "<img src=\"/exercises_2.0/img/git-stages-dark.svg\"/>";
      }

      if (document.getElementById('tools') != null) {
        document.getElementById("tools").innerHTML ="<img src=\"/exercises_2.0/img/tools_dark.png\"/>";
      }

    } else {
      document.getElementById("theme").innerHTML="";
      document.getElementById("theme").innerHTML="<i class='fas fa-sun'></i>";

    }

  }

}

/*** CHECKMARKS ***/

//function checkmarks called at the end of include.js
function checkmarks() {
  console.log("load");
  for (i = 1; i < 24; i++) {

    if(document.getElementById("task"+i) != null) {
      if (localStorage.getItem('task' + i) === "checked") {
        document.getElementById("task" + i).checked = true;
        console.log("task" + i);
      }
    }
  }
}

function checkmarks_save(id) {
  if (localStorage.getItem('task'+id) === "checked") {
    var checkbox = document.getElementById("task" + id);
    localStorage.setItem("task" + id, "unchecked");
  } else {
    var checkbox = document.getElementById("task" + id);
    localStorage.setItem("task" + id, "checked");
    console.log("task" + id);
  }
}
