var acc = document.getElementsByClassName("accordion");
var acc2 = document.getElementsByClassName("active");
var i;
var j;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        if (this.className==="accordion") {
            removeActive();
        }
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function removeActive () {
    for (j = 0; j < acc2.length; j++) {
        var panel2 = acc2[j].nextElementSibling;
        if(panel2.style.maxHeight) {
            panel2.style.maxHeight = null;
            acc2[j].classList.toggle("active");
        }
    }
}