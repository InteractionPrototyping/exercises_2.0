var acc = document.getElementsByClassName("accordion");
var acc2 = document.getElementsByClassName("active");
var acc3 = document.getElementsByClassName("is-active");
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
