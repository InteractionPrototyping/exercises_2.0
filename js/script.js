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
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            if (this.className === "accordion") {
                removeActive();
            }
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("active");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    }
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

function activeSection () {
    this.classList.toggle("is-active");

    // for (i = 0; i < acc3.length; i++) {
    //         if (acc3[i].className === "is-active") {
    //             acc3[i].classList.toggle("is-active");
    //         }
    // }
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

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                menu.classList.toggle('is-hidden');
                content.classList.toggle('is-hidden');
            });
        });
    }

    $sections.forEach(el => {
        el.addEventListener('click',() => {
            el.classList.toggle("is-active");
        })
    })
});

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}