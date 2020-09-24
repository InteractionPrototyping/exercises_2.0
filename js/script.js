var acc = document.getElementsByClassName("accordion");
var acc2 = document.getElementsByClassName("active");
var acc3 = document.getElementsByClassName("section");
var i;
var j;

function accordion () {
    /*mark a section
    for (j = 0; j < acc3.length; j++) {
        acc3[j].classList.remove("is-active");
    }
    var activeSection = document.getElementById(page);
    activeSection.classList.add("is-active");
    */
    /*expand accordion*/
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
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.toggle("active");
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
            //console.log(el.parentElement.parentElement.previousElementSibling);
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


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    const $sections = Array.prototype.slice.call(document.querySelectorAll('.section'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const menu = document.getElementById("burger_menu");
                const content = document.getElementById("content");
                const navigation = document.getElementById("navigation");
                const footer = document.getElementById("footer");

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                menu.classList.toggle('is-hidden');
                content.classList.toggle('is-hidden');
                navigation.classList.toggle('is-hidden');
                footer.classList.toggle('is-hidden');
            });
        });
    }


});



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
        document.getElementById("name_person").innerHTML = "Yucheng Yang.";
    } else {
    }

    // In: Iteration 2: 8 HiFi Prototyping Task 8 Deadline
    var el = document.getElementById('deadline_task8');
    if (el != null) {
        document.getElementById("deadline_task8").innerHTML = "xx.xx.2020";
    } else {
    }

    // In: Iteration 2: 9 HiFi Heuristic Evaluation Task 9 Deadline
    var el = document.getElementById('deadline_task9');
    if (el != null) {
        document.getElementById("deadline_task9").innerHTML = "xx.xx.2020";
    } else {
    }

    // In: Iteration 4: 20 Presentation M4 Deadline GitHub Freeze (with time between M4 presentation and Github Freeze)
    var el = document.getElementById('deadline_task20');
    if (el != null) {
        document.getElementById("deadline_task20").innerHTML = "x days (until xx.xx.21 at 23:59:59)";
    } else {
    }



    //Update complete schedule manually in index.html
}

/*
$(document).ready(function () {
    'use strict';
    // Set up search
    var index, store;
    $.getJSON('/lunr.json', function (response) {
        // Create index
        index = lunr.Index.load(response.index);
        // Create store
        store = response.store;
        // Handle search
        $('input#search').on('keyup', function () {
            // Get query
            var query = $(this).val();
            // Search for it
            var result = index.search(query);
            // Output it
            var resultdiv = $('ul.searchresults');
            if (result.length === 0) {
                // Hide results
                resultdiv.hide();
            } else {
                // Show results
                resultdiv.empty();
                for (var item in result) {
                    var ref = result[item].ref;
                    var searchitem = '<li><a href="' + ref + '">' + store[ref].title + '</a></li>';
                    resultdiv.append(searchitem);
                }
                resultdiv.show();
            }
        });
    });
});
*/

function theme() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
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
                document.getElementById("schedule2020").innerHTML = "<img src=\"/exercises_2.0/img/tum_dark.png\"/>";
            }

            if (document.getElementById('spiral_picture') != null) {
                document.getElementById("spiral_picture").setAttribute('href', '/exercises_2.0/img/orga-spiral-new-dark.svg');
            }

        } else {
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
                document.getElementById("schedule2020").innerHTML = "<img src=\"/exercises_2.0/img/schedule2020.svg\"/>";
            }

            if (document.getElementById('spiral_picture') != null) {
                document.getElementById("spiral_picture").setAttribute('href', '/exercises_2.0/img/orga-spiral-new.svg');
            }

        }
    }

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
                document.getElementById("schedule2020").innerHTML ="<img src=\"/exercises_2.0/img/schedule2020dark.svg\"/>";
            }

            if (document.getElementById('spiral_picture') != null) {
                document.getElementById("spiral_picture").setAttribute('href', '/exercises_2.0/img/orga-spiral-new-dark.svg');
            }

        } else {
            document.getElementById("theme").innerHTML="";
            document.getElementById("theme").innerHTML="<i class='fas fa-sun'></i>";

        }

    }

}

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

/*
    var toggleSwitch = document.querySelectorAll('.checks input[type="checkbox"]');

    toggleSwitch.addEventListener('change', switchCheck, false);

    function switchCheck(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('checkmark', 'is-checked');
            localStorage.setItem('checkmark', 'is-checked'); //add this

        } else {
            document.documentElement.setAttribute('checkmark', 'is-not-checked');
            localStorage.setItem('checkmark', 'is-not-checked'); //add this
        }
    }

    for (i = 0; i < toggleSwitch.length; i++) {
        console.log(toggleSwitch[i]);
        var currentCheck = localStorage.getItem('checkmark') ? localStorage.getItem('checkmark') : null;

        if (currentCheck) {
            document.documentElement.setAttribute('checkmark', currentCheck);
            console.log(toggleSwitch[i]);

            if (currentCheck === 'is-checked') {
                toggleSwitch[i].checked = true;
            }

        }
    }
}
*/
